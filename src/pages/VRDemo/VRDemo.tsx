import React, { Suspense, useRef } from 'react';
import styled from 'styled-components';
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import { Sky, OrbitControls, Html, Box, softShadows } from '@react-three/drei';
import { VRCanvas, DefaultXRControllers } from '@react-three/xr';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const VRDemo: React.FC = () => {
  softShadows({
    frustrum: 3.75, // Frustrum width (default: 3.75)
    size: 0.005, // World size (default: 0.005)
    near: 9.5, // Near plane (default: 9.5)
    samples: 17, // Samples (default: 17)
    rings: 11, // Rings (default: 11)
  });
  const Floor = (): JSX.Element => (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" opacity={1} />
    </mesh>
  );

  const UnityAdam = ({ position, rotation, scale }): JSX.Element => {
    const { scene } = useLoader(GLTFLoader, 'gltf/adamHead/adamHead.gltf');
    return (
      <mesh position={position} rotation={rotation} scale={scale}>
        <primitive object={scene} />
      </mesh>
    );
  };

  const Nokia3310 = ({ position }): JSX.Element => {
    const { clock } = useThree();
    const mesh = useRef<Mesh>();
    const { scene } = useLoader(GLTFLoader, 'gltf/nokia_3310/scene.gltf');
    const [x, y, z] = position;
    useFrame(() => {
      if (mesh.current) {
        mesh.current.position.y = y + Math.sin(clock.getElapsedTime()) * 0.5;
        mesh.current.rotation.y += 0.02;
      }
    });
    return (
      <mesh ref={mesh} position={position} scale={[0.2, 0.2, 0.2]} castShadow>
        <primitive object={scene} />
      </mesh>
    );
  };

  const Scene = ({ initialCamPosition }): JSX.Element => {
    const { camera } = useThree();
    return (
      <>
        <group position={initialCamPosition}>
          <primitive object={camera} />
        </group>
        <Sky />
        <ambientLight intensity={0.2} />
        <pointLight position={[-10, 10, 10]} />
        <pointLight position={[0, 1, -20]} intensity={0.3} />
        <directionalLight
          castShadow
          position={[15, 10, 10]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <fog attach="fog" args={['white', 15, 25]} />
        <Floor />
      </>
    );
  };

  return (
    <Wrapper>
      <VRCanvas colorManagement shadowMap>
        <Suspense
          fallback={
            <Html>
              <h1>loading...</h1>
            </Html>
          }
        >
          <Scene initialCamPosition={[0, 0, 2]} />
          <OrbitControls maxPolarAngle={Math.PI / 2.2} />
          <Box position={[-2, 1, 0]} castShadow>
            <meshStandardMaterial attach="material" color="orange" />
            <Html center position={[0, 2, 0]} scaleFactor={8}>
              <div
                style={{
                  padding: '0px 13px',
                  backgroundColor: 'white',
                  borderColor: '#dddddd',
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderRadius: 9,
                }}
              >
                <h1>Hello!</h1>
                <p>I'm a cube and I know how to cast a shadow.</p>
              </div>
            </Html>
          </Box>
          <Nokia3310 position={[0, 1.5, 0]} />
          <UnityAdam position={[3, 2.5, 0]} rotation={[0, Math.PI / 1.5, 0]} scale={[1, 1, 1]} />
          <DefaultXRControllers />
        </Suspense>
      </VRCanvas>
    </Wrapper>
  );
};

export default VRDemo;
