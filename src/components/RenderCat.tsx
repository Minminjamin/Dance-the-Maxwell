import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import THREE, { AnimationMixer, Group, Vector2 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RenderCat = () => {
  // https://velog.io/@iepppop/react-three.js-%EB%B9%9B
  const gltf = useLoader(GLTFLoader, "/asset/maxwell/scene.gltf");
  const modelRef = useRef<Group>();
  const mixerRef = useRef<AnimationMixer>();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 80;
    }
    console.log(gltf);
  }, []);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
    //     if(mixer)
    //   {
    //     mixer.update(deltaTime)
    // }
  });

  useEffect(() => {
    const mixer = new AnimationMixer(gltf.scene);
    const action = mixer.clipAction(gltf.animations[0]);
    action.play();
    mixerRef.current = mixer; //위에서 값을 사용가능하도록 mixer 값을 할당
  }, []);

  return (
    <>
      <primitive object={gltf.scene} scale={0.1} ref={modelRef} />
    </>
  );
};
export default RenderCat;
