import styled from 'styled-components';
import MapComponent from '../../components/Map';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Map = styled(MapComponent)`
  @media (max-width: 500px) {
    display: none;
  }
`;
