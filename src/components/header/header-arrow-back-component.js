import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {Icon} from 'native-base';
import style from '../../../styles/style';

const HeaderArrowBackComponent = ({onPress, onSearch}) => (
  <SafeAreaView style={style.safeAreaView}>
    <View style={style.headerComponent}>
      <Icon name={'md-arrow-back'} onPress={onPress} />
      <TextInput
        style={style.containerFlex1}
        onChangeText={(text) => onSearch(text)}
      />
    </View>
  </SafeAreaView>
);

export default HeaderArrowBackComponent;
