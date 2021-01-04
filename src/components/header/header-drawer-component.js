import React from 'react';
import {Header, Left, Button, Input} from 'native-base';
import {Image} from 'react-native';
import style from '../../../styles/style';

const icon = require('../../../assets/menu.png');

const HeaderDrawerComponent = ({navigate}) => (
  <Header transparent>
    <Left style={style.rowOrientation}>
      <Button transparent onPress={() => navigate.openDrawer('DrawerOpen')}>
        <Image style={style.drawerIcon} source={icon} />
      </Button>
      <Input placeholder="Moradores, Bloco, Apartamentos" />
    </Left>
  </Header>
);

export default HeaderDrawerComponent;
