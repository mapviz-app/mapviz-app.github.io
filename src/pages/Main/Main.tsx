import React from 'react';
import { Wrapper, Map } from './Main.style';
import SideNav from '../../components/SideNav';

const Main: React.FC = () => {
  return (
    <Wrapper>
      <Map />
      <SideNav />
    </Wrapper>
  );
};

export default Main;
