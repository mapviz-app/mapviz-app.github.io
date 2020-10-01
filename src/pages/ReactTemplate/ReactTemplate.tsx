import React from 'react';
import { Container, AppHeader, AppLogo, AppLink } from './ReactTemplate.styles';
import logo from '../../assets/logo.svg';

const ReactTemplate: React.FC = () => {
  return (
    <Container>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          This page should be removed in the near future. It is still here just to have one extra
          test route :P
        </p>
        <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </AppLink>
      </AppHeader>
    </Container>
  );
};

export default ReactTemplate;
