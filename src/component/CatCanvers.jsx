import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function CatCanvers() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#1d1d1d"); // 배경색을 흰색으로 설정

    const camera = new THREE.PerspectiveCamera(28, 1);
    camera.position.set(0, 0, 10);

    // 이미 존재하는 캔버스를 사용하여 렌더러 생성
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(500, 500);

    let mixer;
    let modelScene;

    const loader = new GLTFLoader();
    loader.load("koi_cat/scene.gltf", (gltf) => {
      modelScene = gltf.scene;
      scene.add(modelScene);

      if (gltf.animations && gltf.animations.length) {
        mixer = new THREE.AnimationMixer(modelScene);
        mixer.clipAction(gltf.animations[0]).play();
      }
      animate();
    });

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      if (mixer) {
        mixer.update(clock.getDelta());
      }

      if (modelScene) {
        modelScene.rotation.y -= 0.001;
      }
      renderer.render(scene, camera);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "400px", height: "400px" }}></canvas>
  );
}

export default CatCanvers;
