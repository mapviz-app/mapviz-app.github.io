import styled from 'styled-components';

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
`;

export const TabBarContainer = styled.nav`
  display: flex;
  background-color: #212129;
  border-radius: 9px;
  height: 30px;
  position: relative;
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
`;
