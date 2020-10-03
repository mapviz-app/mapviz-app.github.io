import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as Three from 'three';

const Scene = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: red;
`;

const VRDemo: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scene = new Three.Scene();
  const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new Three.WebGLRenderer();
  const geometry = new Three.BoxGeometry();
  const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new Three.Mesh(geometry, material);

  useEffect(() => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    // @ts-ignore
    ref.current.appendChild(renderer.domElement);
    scene.add(cube);
    camera.position.z = 5;

    const animate = (): void => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  });

  return (
    <>
      <h1>Three.js test page</h1>
      <Scene ref={ref} />
    </>
  );
};

export default VRDemo;
