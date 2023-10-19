import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  useTexture,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { brain, particle } from "./assets";

function BrainModel({ updatedAni }) {
  const [pointsGeometry, setPointsGeometry] = useState(null);
  const [pointsMat, setPointsMat] = useState(null);
  const [inInit, setInInit] = useState(true);
  const mousePos = useRef(new THREE.Vector3());

  const { scene } = useGLTF(brain);
  const sampler = useRef(null);
  const tempPosition = new THREE.Vector3();

  const { gl } = useThree();

  const [initialPositions, setInitialPositions] = useState(null);
  const [targetPositions, setTargetPositions] = useState(null);

  useEffect(() => {
    const animateToBrainShape = () => {
      // Animation from current position to brain shape (targetPositions)
      for (let i = 0; i < initialPositions.length; i += 3) {
        new TWEEN.Tween({
          x: pointsGeometry.attributes.position.array[i],
          y: pointsGeometry.attributes.position.array[i + 1],
          z: pointsGeometry.attributes.position.array[i + 2],
        })
          .to(
            {
              x: targetPositions[i],
              y: targetPositions[i + 1],
              z: targetPositions[i + 2],
            },
            3000
          )
          .easing(TWEEN.Easing.Quadratic.InOut)

          .onUpdate((coords) => {
            pointsGeometry.attributes.position.array[i] = coords.x;
            pointsGeometry.attributes.position.array[i + 1] = coords.y;
            pointsGeometry.attributes.position.array[i + 2] = coords.z;
            pointsGeometry.attributes.position.needsUpdate = true;
          })
          .start();
      }
    };

    const animateToRandom = () => {
      // Animation from current position to random positions (initialPositions)
      for (let i = 0; i < initialPositions.length; i += 3) {
        new TWEEN.Tween({
          x: pointsGeometry.attributes.position.array[i],
          y: pointsGeometry.attributes.position.array[i + 1],
          z: pointsGeometry.attributes.position.array[i + 2],
        })
          .to(
            {
              x: initialPositions[i],
              y: initialPositions[i + 1],
              z: initialPositions[i + 2],
            },
            3000
          )
          .easing(TWEEN.Easing.Quadratic.InOut)

          .onUpdate((coords) => {
            pointsGeometry.attributes.position.array[i] = coords.x;
            pointsGeometry.attributes.position.array[i + 1] = coords.y;
            pointsGeometry.attributes.position.array[i + 2] = coords.z;
            pointsGeometry.attributes.position.needsUpdate = true;
          })
          .start();
      }
    };

    const handleScroll = () => {
      if (window.scrollY >= 500 && inInit) {
        animateToRandom();
        setInInit(false);
      } else if (window.scrollY < 500 && !inInit) {
        animateToBrainShape();
        setInInit(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inInit, pointsGeometry, initialPositions, targetPositions]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // normalize mouse position from -0.5 to 0.5
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Set the mouse position
      mousePos.current.set(mouseX, mouseY, 0);
    };

    // Attach the event listener
    gl.domElement.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      gl.domElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [gl]);

  useEffect(() => {
    if (scene) {
      scene.traverse((obj) => {
        if (obj.isMesh) {
          sampler.current = new MeshSurfaceSampler(obj).build();
        }
      });

      const someRange = 15; // Define the range for the random initial positions
      const halfOfRange = someRange / 2;

      let vertices = [];
      let targetVertices = [];

      for (let i = 0; i < 5000; i++) {
        sampler.current.sample(tempPosition);

        targetVertices.push(-tempPosition.y, -tempPosition.z, tempPosition.x);

        const randomPos = new THREE.Vector3(
          Math.random() * someRange - halfOfRange,
          Math.random() * someRange - halfOfRange,
          Math.random() * someRange - halfOfRange
        );

        vertices.push(randomPos.x, randomPos.y, randomPos.z);
      }

      let start = new Array(5000 * 3).fill(0.1);

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(start, 3)
      );

      const pointsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.11,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        sizeAttenuation: true,
        alphaMap: new THREE.TextureLoader().load(particle),
      });

      pointsMaterial.onBeforeCompile = function (shader) {
        shader.uniforms.mousePos = { value: mousePos.current };

        shader.vertexShader = `
                uniform vec3 mousePos;
                varying float vNormal;
                varying float vDistance;
                
                ${shader.vertexShader}`.replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>   
                  vec3 seg = position - mousePos;
                  vec3 dir = normalize(seg);
                  float dist = length(seg);
                  vDistance = dist;
                  if (dist < 5.0){
                      float force = clamp(0.3 / (dist * dist), -0., .1);
                    transformed += dir * force;
                    vNormal = force /0.5;
                  }
                `
        );
      };

      let completedTweens = 0;

      new TWEEN.Tween(pointsMaterial)
        .to({ opacity: 0.6 }, 1000)
        .onUpdate(() => {
          pointsMaterial.needsUpdate = true;
        })
        .start();

      for (let i = 0; i < start.length; i += 3) {
        const tween = new TWEEN.Tween({
          x: start[i],
          y: start[i + 1],
          z: start[i + 2],
        })
          .to(
            {
              x: targetVertices[i],
              y: targetVertices[i + 1],
              z: targetVertices[i + 2],
            },
            5000
          ) // Animation duration
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate((coords) => {
            geometry.attributes.position.array[i] = coords.x;
            geometry.attributes.position.array[i + 1] = coords.y;
            geometry.attributes.position.array[i + 2] = coords.z;
            geometry.attributes.position.needsUpdate = true;
          })
          .onComplete(() => {
            completedTweens++;
            if (completedTweens === vertices.length / 3) {
              updatedAni();
            }
          })
          .start();
      }

      // Animation loop for TWEEN
      const animateTweens = () => {
        TWEEN.update();
        requestAnimationFrame(animateTweens);
      };
      animateTweens();

      setInitialPositions(vertices);
      setTargetPositions(targetVertices);
      setPointsMat(pointsMaterial);
      setPointsGeometry(geometry);
    }
  }, [scene]);

  return (
    <>
      {pointsGeometry && (
        <points args={[pointsGeometry, pointsMat]} scale={3}></points>
      )}
    </>
  );
}

export default React.memo(BrainModel)