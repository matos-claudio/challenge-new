import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import style from '../../../styles/style';

const height = Dimensions.get('window').height / 1.5;

const ListEmptyComponent = ({message}) => (
  <View style={[style.viewEmptyList, {height}]}>
    <Text>{message}</Text>
  </View>
);

export default ListEmptyComponent;
