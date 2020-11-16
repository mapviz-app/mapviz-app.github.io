import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const itemIcon = type === 'commercial' ? 'commercial-building' : 'office-building';
  return (
    <Container onClick={(): void => history.push('/location')}>
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
