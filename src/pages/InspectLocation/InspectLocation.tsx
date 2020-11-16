/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import styled from 'styled-components';
// import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { VRCanvas } from '@react-three/xr';
// import * as THREE from 'three';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #222228;
  user-select: none;
`;

const InspectLocation: React.FC = () => {
  const Lights = (): JSX.Element => {
    return (
      <>
        <ambientLight intensity={0.3} />
        {/* <pointLight position={[0, 1, -20]} intensity={0.1} /> */}
        <directionalLight castShadow position={[20, 50, 10]} intensity={0.8} />
      </>
    );
  };

  const Floor = (): JSX.Element => {
    return (
      <>
        <gridHelper args={[150, 150, 'coral', '#131316']} position={[0, -0.5, 0]} />
      </>
    );
  };

  const Box = (props): JSX.Element => {
    const { color } = props;
    const [hovered, setHovered] = useState(false);
    return (
      <mesh
        {...props}
        onPointerOver={(event): void => {
          event.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(): void => setHovered(false)}
      >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshLambertMaterial attach="material" color={hovered ? 'white' : color} />
      </mesh>
    );
  };

  return (
    <Wrapper>
      <VRCanvas shadowMap colorManagement>
        <OrbitControls />
        <Lights />
        <Box castShadow position={[0, 0, 0]} color="lightgrey" />
        <Box castShadow position={[0, 1, 0]} color="lightgrey" />
        <Box castShadow position={[0, 2, 0]} color="lightgrey" />
        <Box castShadow position={[0, 3, 0]} color="lightgrey" />
        <Floor />
        <fog attach="fog" args={['#222228', 25, 40]} />
      </VRCanvas>
    </Wrapper>
  );
};

export default InspectLocation;
