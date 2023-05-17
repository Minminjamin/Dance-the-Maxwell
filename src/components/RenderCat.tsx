import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RenderCat = () => {
  const gltf = useLoader(GLTFLoader, "/asset/maxwell/scene.gltf");
  const modelRef = useRef<THREE.Group>();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 80;
    }
  }, []);
  // useFrame(() => {

  // });
  return (
    <>
      <primitive object={gltf.scene} scale={0.1} ref={modelRef} />
    </>
  );
};
export default RenderCat;
