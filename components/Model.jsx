import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Text } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { AxesHelper } from 'three';

const Scene = ({animationSwitch}) => {
  const { camera, scene } = useThree();
  const gltfRef = useRef();
  // console.log(camera.position);
  // Load the model with GLTFLoader
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('../assets/mclaren-3.glb', (gltf) => {
      scene.add(gltf.scene);
      gltfRef.current = gltf.scene;
    });
  }, [scene]);

  // useFrame(()=>{
  //   if(camera.position.y < 1){
  //     camera.position.y = 1;
  //   }
  // });
  // GSAP Camera Animation
  useGSAP(() => {
    const tl = gsap.timeline();
    // console.log(animationSwitch);
    if(animationSwitch=='click1'){
      tl.to(camera.position, { z: 10, x: 10, y: 10, duration: 2 })
        .to(camera.position, { z: 0.46, x: 5.5, y: 1, duration: 2 })
    }
    else if(animationSwitch=='click2'){
      tl.to(camera.position, { z: 5.9, x: -0.47, y: 1, duration: 2 })
      .to(camera.position, { z: 3.49, x: -3.87, y: 1.09, duration: 2 })
    }
    else if(animationSwitch=='click3'){
      tl.to(camera.position, { z: -5.076, x: -2.197, y: 1.11, duration: 2 })
    }
    else if(animationSwitch=='click4'){
      tl.to(camera.position, { z: 0.46, x: 5.5, y: 1, duration: 2 });
    }
  }, [animationSwitch]);

  return (
    <>
      {/* Apply environment using Environment component from drei */}
      <Environment files="../assets/mountain.hdr" />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 3, 0]} intensity={10} />
      <OrbitControls enableRotate={false} enablePan={false} enableZoom={false}  enableDamping dampingFactor={0.05} maxPolarAngle={Math.PI / 2} target={[2,0.5,0]} />
    </>
  );
};

const Model = ({animationSwitch}) => {  
  return (
    <Canvas camera={{ position: [-2.168, 1.098, 2.164], fov: 75 }}>
      {/* <axesHelper args={[10]}/> */}
      {/* <Text
        position={[0, 2, -3]} // Position of the text in the 3D space
        fontSize={5} // Size of the text
        color="orange" // Text color
      >
        MCLAREN
        <meshStandardMaterial attach="material" color="orange" />
      </Text> */}
      <Scene animationSwitch={animationSwitch}/>
    </Canvas>
  );
};

export default Model;
