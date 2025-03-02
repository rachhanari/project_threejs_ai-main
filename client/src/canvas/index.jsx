import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import HDRScene from "../components/HDRscence";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  const [hdrTexture, setHdrTexture] = useState(null);

  useEffect(() => {
    new RGBELoader().load("/potsdamer_platz_1k.hdr", (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      setHdrTexture(texture);
    });
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />

      <Suspense fallback={null}>
        {hdrTexture && <primitive object={hdrTexture} attach="background" />}
      </Suspense>

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
        <HDRScene />
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
