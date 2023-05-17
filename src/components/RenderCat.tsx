import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RenderCat = () => {
  const gltf = useLoader(GLTFLoader, "/asset/maxwell/scene.gltf");

  return (
    <>
      <primitive object={gltf.scene} scale={0.1} />
    </>
  );
};
export default RenderCat;
