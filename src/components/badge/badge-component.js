import React from 'react';
import {View, Text} from 'react-native';
import style from '../../../styles/style';

const BadgeComponent = ({size}) => (
  <View style={style.viewBadge}>
    <Text style={style.labelBadge}>{size}</Text>
  </View>
);

export default BadgeComponent;
