import React, { useRef, useState, useEffect, } from "react";
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
import BrainModel from "./BrainModel";

function Scene({ updatedAni }) {
  const cameraRef = useRef();

  let theta1 = 0;
  useFrame(() => {
    if (cameraRef.current) {
      // Use rotationSpeed to determine how much theta1 changes
      theta1 += 0.0025;

      cameraRef.current.position.x = Math.sin(theta1) * 10;
      cameraRef.current.position.z = Math.cos(theta1) * 10;
      cameraRef.current.position.y = Math.cos(theta1);
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <group>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 0, 10]}
          fov={45}
        />
        <BrainModel updatedAni={updatedAni} />
      </group>
    </>
  );
}

export default React.memo(Scene);
