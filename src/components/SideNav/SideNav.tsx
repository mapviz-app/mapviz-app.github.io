/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Nav,
  Section,
  Title,
  SubTitle,
  TabBarContainer,
  Tab,
  CurrentTabIndicator,
  Divider,
  LocationsContainer,
  StickySection,
  Map,
} from './Sidenav.style';
import ListItem, { Props as ListItemProps } from '../ListItem';

const TabBar: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = ['locations', 'problems', 'unknown'];
  return (
    <TabBarContainer>
      <CurrentTabIndicator tabsAmount={tabs.length} currentTab={currentTab} />
      {tabs.map((label, index) => (
        <Tab key={`tab-bar-${index}`} onClick={(): void => setCurrentTab(index)}>
          {label}
        </Tab>
      ))}
    </TabBarContainer>
  );
};

const Locations: React.FC = () => {
  const locations: ListItemProps[] = [
    {
      name: 'Demo sample',
      address: 'Samplestreet 34, 12345 Democity',
      type: 'office',
    },
    {
      name: 'Redi Mall',
      address: 'Hermannin rantatie 5, 00580 Helsinki',
      type: 'commercial',
    },
    {
      name: 'Kamppi Center',
      address: 'Urho Kekkosen katu 1, 00100 Helsinki',
      type: 'commercial',
    },
    {
      name: 'Sello Mall',
      address: 'Leppävaarankatu 3-9, 02600 Espoo',
      type: 'commercial',
    },
    {
      name: 'Hartwall Arena',
      address: 'Areenankuja 1, 00240 Helsinki',
      type: 'office',
    },
    {
      name: 'Nokia Karamalmi campus',
      address: 'Karaportti 3, 02610 Espoo',
      type: 'office',
    },
    {
      name: 'Oodi central library',
      address: 'Töölönlahdenkatu 4, 00100 Helsinki',
      type: 'office',
    },
    {
      name: 'Kaapelitehdas',
      address: 'Tallberginkatu 1 C 15, 00180 Helsinki',
      type: 'office',
    },
  ];

  return (
    <LocationsContainer>
      {locations.map((props, index) => (
        <ListItem key={`location-item-${index}`} {...props} />
      ))}
    </LocationsContainer>
  );
};

type Props = {
  // Define possible props here
};

const SideNav: React.FC<Props> = () => {
  return (
    <Nav>
      <Section>
        <SubTitle>Current location</SubTitle>
        <Title>Finding location...</Title>
      </Section>
      <Map />
      <StickySection>
        <Section>
          <TabBar />
        </Section>
        <Divider />
      </StickySection>
      <Locations />
    </Nav>
  );
};

export default SideNav;
