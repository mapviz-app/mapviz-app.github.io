import React from 'react';
import {
  Container,
  NameLabel,
  AddressLabel,
  TextContainer,
  LeftIcon,
  RightIcon,
} from './ListItem.style';

export type Props = {
  name: string;
  address: string;
  type: 'commercial' | 'office';
};

const ListItem: React.FC<Props> = ({ name, address, type }) => {
  const itemIcon = type === 'commercial' ? 'commercial-building' : 'office-building';
  return (
    <Container>
      <LeftIcon name={itemIcon} />
      <TextContainer>
        <NameLabel>{name}</NameLabel>
        <AddressLabel>{address}</AddressLabel>
      </TextContainer>
      <RightIcon name="arrow-right" />
    </Container>
  );
};

export default ListItem;
