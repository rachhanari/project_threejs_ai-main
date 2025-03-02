import { useEffect, useState } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const HDRScene = () => {
  const [hdrTexture, setHdrTexture] = useState(null);

  useEffect(() => {
    new RGBELoader().load("/potsdamer_platz_1k.hdr", (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      setHdrTexture(texture);
    });
  }, []);

  return hdrTexture ? (
    <primitive attach="background" object={hdrTexture} />
  ) : null;
};

export default HDRScene;
