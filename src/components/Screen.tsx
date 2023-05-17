import { OrbitControls } from "@react-three/drei";
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
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <OrbitControls camera={cameraRef.current} enableZoom={false} />

        <Suspense fallback={null}>
          <RenderCat />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Screen;
