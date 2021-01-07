import React from 'react';
import {Text, View} from 'react-native';
import style from '../../../styles/style';

const UserDataComponent = ({user}) => (
  <View style={style.viewUserComponent}>
    <Text style={style.labelUserNameComponent}>{user.name}</Text>
    <Text style={style.labelAddressComponent}>{user.condominium.name}</Text>
    <View style={style.dividerUserComponent} />
  </View>
);

export default UserDataComponent;
