import React from 'react';
import { Container } from './Devmenu.styles';
import LinkButton from '../../components/LinkButton';

const Main: React.FC = () => {
  return (
    <Container>
      <h1>Dev Menu</h1>
      <LinkButton route="/dashboard">Dashboard</LinkButton>
      <LinkButton route="/mapdemo">Map Demo</LinkButton>
      <LinkButton route="/vrdemo">VR Demo</LinkButton>
      <LinkButton route="/threejstest">Three.js Test</LinkButton>
      <LinkButton route="/reactthreefiber">React Three Fiber Test</LinkButton>
      <LinkButton route="/template">Old Template</LinkButton>
    </Container>
  );
};

export default Main;
