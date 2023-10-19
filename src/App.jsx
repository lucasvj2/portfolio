import { useState, useCallback, Profiler } from "react";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Navbar, Enter } from "./components";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Tech from "./components/Tech/Tech";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

import { Stats } from "@react-three/drei";

function App() {
  const [aniDone, setAniDone] = useState(false);
  console.log(process.env.NODE_ENV);

  const updatedAni = useCallback(() => {
    setAniDone(true);
  }, []);

  return (
    <div className={`${aniDone ? '' : 'h-[100vh] overflow-hidden'}`}>
      <div className="fixed top-0 bottom-0 left-0 right-0 ">
        <Canvas>
          <Stats />
          <Scene updatedAni={updatedAni} />
        </Canvas>
      </div>
      {aniDone && (
        <div>
          <div className="fixed top-20 left-20">
            <Navbar />
          </div>
          <div className="fixed top-[85vh] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Enter />
          </div>
        </div>
      )}
      <div className="mt-[1200px] ml-80 mr-36">
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
