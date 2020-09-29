import React from 'react';
import { Container, AppHeader, AppLogo, AppLink } from './App.styles';
import logo from '../../assets/logo.svg';

const App = () => {
  return (
    <Container>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Hold your horses VR coming soon{' '}
          <span role="img" aria-label="box emoji">
            📦
          </span>
        </p>
        <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </AppLink>
      </AppHeader>
    </Container>
  );
};

export default App;
