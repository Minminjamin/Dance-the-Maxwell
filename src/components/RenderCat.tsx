import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RenderCat = () => {
  const gltf = useLoader(GLTFLoader, "/asset/cat.gltf");

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};
export default RenderCat;
