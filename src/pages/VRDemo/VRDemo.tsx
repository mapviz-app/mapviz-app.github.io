import React, { useRef } from 'react';
import styled from 'styled-components';
import { useFrame } from 'react-three-fiber';
import { Sky, OrbitControls } from '@react-three/drei';
import { VRCanvas, DefaultXRControllers } from '@react-three/xr';
import { Mesh } from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// @ts-ignore
// import nokia3310 from '../../assets/3D-models/nokia_3310/scene.gltf';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const VRDemo: React.FC = () => {
  const Floor = (): JSX.Element => (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[40, 40]} />
      <meshLambertMaterial attach="material" color="#666666" />
    </mesh>
  );

  const Box = (): JSX.Element => {
    const mesh = useRef<Mesh>();
    useFrame(() => {
      if (mesh.current) {
        mesh.current.rotation.y += 0.01;
        mesh.current.position.y += Math.sin(Date.now() / 1000) * 0.01;
        // if (mesh.current.position.y < 2) {
        //   mesh.current.position.y += 0.01;
        // }
      }
    });
    return (
      <mesh ref={mesh} scale={[0.5, 0.5, 0.5]} position={[0, 2, -2]} receiveShadow castShadow>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshLambertMaterial attach="material" color="orange" />
      </mesh>
    );
  };

  return (
    <Wrapper>
      <VRCanvas shadowMap>
        <Sky />
        <Floor />
        <Box />
        <ambientLight />
        <pointLight position={[10, 10, 10]} castShadow />
        <DefaultXRControllers />
        <OrbitControls />
      </VRCanvas>
    </Wrapper>
  );
};

export default VRDemo;
