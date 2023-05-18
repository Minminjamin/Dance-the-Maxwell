import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import THREE, { AnimationClip, AnimationMixer, Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RenderCat = () => {
  const gltf = useLoader(GLTFLoader, "/asset/maxwell/scene.gltf");
  const modelRef = useRef<Group>();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 80;
    }
    console.log(gltf);
  }, []);

  // useFrame(() => {
  //   const mixer = new AnimationMixer(gltf.scene);
  //   const action = mixer.clipAction(gltf.animations[0]);
  //   action.play();
  // });

  return (
    <>
      <primitive object={gltf.scene} scale={0.1} ref={modelRef} />
    </>
  );
};
export default RenderCat;
