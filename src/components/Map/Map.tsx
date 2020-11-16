import React from 'react';
import { Wrapper } from './Map.style';

type Props = {
  // Define possible props here
  className?: string;
};

const Map: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <h3>harp.gl map</h3>
    </Wrapper>
  );
};

export default Map;
