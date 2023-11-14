# 소개

![KakaoTalk_20231113_231900607](https://github.com/Minminjamin/Dance-the-Maxwell/assets/122540708/fd1d2b19-74a4-4ea7-9d2a-371dd2cf0771)

2022년 happ cat과 함께 밈으로 유행했던 maxwell cat의 춤을 웹 사이트에서 구현한 토이 프로젝트입니다.

## 개발 기간

- 2023년 5월 15일 ~ 2023년 5월 22일 (총 7일)

## 목적

- Three.js를 통한 3d 모션 모션 구현

## 대표 기능

- maxwell cat이 마우스를 따라 움직임

- 마우스 휠을 통해 모델을 확대/축소가 가능

- react-hover을 통해 BGM은 상시 재생

## 사용한 기술

<img  src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=React&logoColor=white"><img  src="https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge&logo=Typescript&logoColor=white"><img  src="https://img.shields.io/badge/Three.js-000?style=for-the-badge&logo=Three.js&logoColor=white">

## 폴더 구조

- src 폴더 밑의 컴포넌트들만 작성

```
┣ 📂conponents
┃ ┃ ┣ 📜Bgm.tsx
┃ ┃ ┣ 📜RenderCat.tsx
┃ ┃ ┗ 📜Sceen.tsx
┃ ┣ 📜App.tsx
┃ ┣ 📜index.tsx
┗ ┗ 📜index.css
```

## 모델 출처

- https://sketchfab.com/3d-models/maxwell-dance-801b4ae7347a40fc849d395a38b01776

# 문제 해결

## 초기 로딩 시에 모델이 정면이 아닌 다른 각도로 돌아있음

![image](https://github.com/Minminjamin/Dance-the-Maxwell/assets/122540708/6987b94c-e3fb-4361-a126-df8c618570f9)

- 초기 로딩 시에 모델이 정면을 바라 보지 않음.

  ```
  const modelRef = useRef<Group>();

  useEffect(() => {
  	if (modelRef.current) {
  		modelRef.current.rotation.y += 80;
  	}
  }, []);
  ```

- 컴포넌트가 mounte 시에 모델을 참조한 객체를 80도 회전 시켜 정면을 바라 보도록 함.

# 프로젝트 폴더 별 소개

## Bgm.tsx

- BGM을 재생하는 역할을 담당하는 컴포넌트

- ReactHowler을 사용해 maxwell cat의 BGM을 상시 재생

## RenderCat.tsx

- maxwell cat의 렌더링을 담당하는 컴포넌트

- gltf에 삽입된 모션(춤) 대로 동작

- gltf에 있는 애니메이션을 추출 후 mixerRef로 애니메이션 값을 전달

  ```
  useEffect(() => {
  	const mixer = new AnimationMixer(gltf.scene);
  	const action = mixer.clipAction(gltf.animations[0]);
  	action.play();
  	mixerRef.current = mixer;
  }, [])

  return (
  	<>
  		<primitive  object={gltf.scene}  scale={0.1}  ref={modelRef} />
  	</>
  );
  ```

- 마우스위 위치값을 3d 모델이 따라 움직임

- 전체 뷰퐅트 넓이에 비례한 현재 마우스 값을 추출해 moveRef로 값을 전달

  ```
  const vec = new Vector3();

  useFrame((state) => {
  	if (moveRef.current) {
  		moveRef.current.position.lerp(
  			vec.set(
  				(state.mouse.x _ state.viewport.width) / 2,
  				(state.mouse.y _ state.viewport.height) / 2,
  				0
  			),
  			0.1
  		);
  		moveRef.current.updateMatrixWorld();
  	}
  });
  ```

## Screen.tsx

- 전체적인 3d 모션과 배경의 렌더링을 담당하는 컴포넌트

- 공원 배경과 줌 기능을 넣음

# 참고 자료

- https://velog.io/@iepppop/react-three.js-%EB%B9%9B
