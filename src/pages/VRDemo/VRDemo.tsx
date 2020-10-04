import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Sky } from '@react-three/drei';
import { VRCanvas, DefaultXRControllers } from '@react-three/xr';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MapDemo: React.FC = () => {
  const Floor = (): JSX.Element => (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[40, 40]} />
      <meshStandardMaterial attach="material" color="#666" />
    </mesh>
  );

  return (
    <Wrapper>
      <VRCanvas>
        <Sky />
        <Floor />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <DefaultXRControllers />
      </VRCanvas>
    </Wrapper>
  );
};

export default MapDemo;
