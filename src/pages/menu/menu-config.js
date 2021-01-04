import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ListApartaments from '../home/list-apartaments';
import Residents from '../person/residents';
import SideBar from './sidebar';

const MenuDrawerNavigator = createDrawerNavigator(
  {
    ListApartaments: {screen: ListApartaments},
    Residents: {screen: Residents},
  },
  {contentComponent: (props) => <SideBar {...props} />},
);
export default createAppContainer(MenuDrawerNavigator);
