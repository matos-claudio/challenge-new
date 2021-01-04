import React from 'react';
import {Text, View} from 'react-native';
import style from '../../../styles/style';

const UserDataComponent = () => (
  <View style={style.viewUserComponent}>
    <Text style={style.labelUserNameComponent}>João Pedro</Text>
    <Text style={style.labelAddressComponent}>Auge Jardim Luna</Text>
    <View style={style.dividerUserComponent} />
  </View>
);

export default UserDataComponent;
