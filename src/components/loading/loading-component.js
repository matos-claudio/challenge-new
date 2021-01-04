import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import style from '../../../styles/style';

const LoadingComponent = ({message}) => (
  <View style={style.viewLoading}>
    <ActivityIndicator color="#156BA5" />
    <Text style={style.loadingLabel}>{message}</Text>
  </View>
);
export default LoadingComponent;
