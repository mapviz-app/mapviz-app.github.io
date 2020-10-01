import React from 'react';
import { Container } from './Main.styles';
import LinkButton from '../../components/LinkButton';

const Main: React.FC = () => {
  return (
    <Container>
      <h1>Main page</h1>
      <LinkButton route="/dashboard">Dashboard</LinkButton>
      <LinkButton route="/mapdemo">Map Demo</LinkButton>
      <LinkButton route="/vrdemo">VR Demo</LinkButton>
      <LinkButton route="/template">Old Template</LinkButton>
    </Container>
  );
};

export default Main;
