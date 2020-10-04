import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MapDemo: React.FC = () => {
  const SpinnyBox = ({ position }): JSX.Element => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<Mesh>(null);

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      if (mesh.current) {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
      }
    });

    return (
      <mesh
        position={position}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(): void => {
          setActive(!active);
        }}
        onPointerOver={(): void => {
          setHover(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(): void => {
          setHover(false);
          document.body.style.cursor = 'grab';
        }}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'orange' : 'slategray'} />
      </mesh>
    );
  };

  useEffect(() => {
    return (): void => {
      document.body.style.cursor = 'default';
    };
  });

  return (
    <Wrapper>
      <Canvas onPointerOver={() => (document.body.style.cursor = 'grab')}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SpinnyBox position={[-1.2, 0, 0]} />
        <SpinnyBox position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </Wrapper>
  );
};

export default MapDemo;
