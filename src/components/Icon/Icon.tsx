import React from 'react';
import Icons from '../../assets/icons';

type Props = {
  name: 'arrow-right' | 'commercial-building' | 'office-building';
  className?: string;
};

const Icon: React.FC<Props> = ({ name, className }) => {
  const NamedIcon = Icons[name];
  return <NamedIcon className={className} />;
};

export default Icon;
