import React from 'react';
import {View} from 'react-native';
import {Picker} from 'native-base';
import style from '../../../styles/style';

const PickerComponent = ({selectedValue, onValueChange, blocks}) => (
  <View style={style.containerListApartaments}>
    <Picker
      note
      style={style.picker}
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemPosition) => onValueChange(itemPosition)}>
      {blocks.map((b, index) => (
        <Picker.Item key={index} children={index} label={b.name} value={b.id} />
      ))}
    </Picker>
  </View>
);

export default PickerComponent;
