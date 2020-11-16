import styled from 'styled-components';
import MapComponent from '../Map';

export const Nav = styled.nav`
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  background-color: #1b1b21;
  width: 390px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  padding: 24px 16px;

  @media (max-width: 500px) {
    position: relative;
    width: auto;
    top: unset;
    left: unset;
    border-radius: unset;
    padding: 20px;
  }
`;

export const Map = styled(MapComponent)`
  display: none;
  @media (max-width: 500px) {
    display: flex;
    position: relative;
    width: auto;
    top: unset;
    left: unset;
    border-radius: 13px;
    height: 300px;
  }
`;

export const StickySection = styled.section`
  position: sticky;
  top: -1px;
  background-color: #1b1b21;
`;

export const Section = styled.section`
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  color: white;
  font-family: 'SF Pro Display';
  font-weight: bold;
  font-size: 22px;
  padding: 0;
  margin: 0;
`;

export const SubTitle = styled.h3`
  color: #8d8d90;
  font-size: 11px;
  font-family: 'SF Pro Display';
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  margin-bottom: 2px;
  margin-top: 16px;
`;

export const TabBarContainer = styled.nav`
  display: flex;
  background-color: #212129;
  border-radius: 9px;
  height: 30px;
  position: relative;
  margin-top: 16px;
`;

export const Tab = styled.text`
  font-family: 'SF Pro Display';
  font-weight: bolder;
  font-size: 9px;
  text-transform: uppercase;
  color: white;
  flex: 1;
  text-align: center;
  line-height: 30px;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

interface CurrentTabIndicatorProps {
  currentTab: number;
  tabsAmount: number;
}

export const CurrentTabIndicator = styled.div<CurrentTabIndicatorProps>`
  background-color: #363642;
  border-radius: 9px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props): number => (100 / props.tabsAmount) * props.currentTab}%;
  width: ${(props): number => 100 / props.tabsAmount}%;
  z-index: 1;
  transition: left 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
`;

export const Divider = styled.div`
  background-color: #363642;
  height: 1px;
`;

export const LocationsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  @media (min-width: 500px) {
    overflow-y: scroll;
  }
`;
