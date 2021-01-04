import React from 'react';
import {Image, View} from 'react-native';
import style from '../../../styles/style';

const LOGO_ENCOMENDA = require('../../../assets/logo-chegou-encomenda-linha.png');

export const LogoComponent = () => (
  <View style={style.viewLogoComponent}>
    <Image source={LOGO_ENCOMENDA} />
    <View style={style.dividerLogoComponent} />
  </View>
);
