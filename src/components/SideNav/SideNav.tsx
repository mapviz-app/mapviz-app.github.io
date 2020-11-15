import React from 'react';
import { Nav, Title } from './Sidenav.style';

type Props = {
  // Define possible props here
};

const SideNav: React.FC<Props> = () => {
  return (
    <Nav>
      <Title>Side nav content</Title>
    </Nav>
  );
};

export default SideNav;
