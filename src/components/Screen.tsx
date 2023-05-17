import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { PerspectiveCamera } from "three";
import RenderCat from "./RenderCat";

const Screen = () => {
  const cameraRef = useRef<PerspectiveCamera>();

  const canvasStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={canvasStyle}>
      <Canvas>
        <Suspense fallback={null}>
          <RenderCat />

          <Environment preset="park" background />

          <ambientLight intensity={0.1} />
          <directionalLight color="white" />
          <OrbitControls
            camera={cameraRef.current}
            enableZoom={true}
            minDistance={7}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Screen;
