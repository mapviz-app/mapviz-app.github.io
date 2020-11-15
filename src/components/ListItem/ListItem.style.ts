import styled from 'styled-components';
import Icon from '../Icon';

export const Container = styled.button`
  display: flex;
  align-self: stretch;
  background-color: #222228;
  border: none;
  border-radius: 5px;
  padding: 16px;
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const LeftIcon = styled(Icon)`
  justify-content: center;
  margin-right: 16px;
`;

export const RightIcon = styled(Icon)`
  align-self: center;
  margin-left: 16px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

export const NameLabel = styled.p`
  color: white;
  font-family: 'SF Pro Text';
  font-size: 16px;
  padding: 0;
  margin: 0;
`;

export const AddressLabel = styled.p`
  color: #8d8d90;
  font-family: 'SF Pro Text';
  font-size: 14px;
  padding: 0;
  margin: 0;
  margin-top: 2px;
`;
