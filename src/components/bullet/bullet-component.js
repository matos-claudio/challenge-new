import React from 'react';
import {View} from 'react-native';
import style from '../../../styles/style';

export const BulletComponent = ({color}) => (
  <View style={[style.viewBullet, {backgroundColor: color}]} />
);
