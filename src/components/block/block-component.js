import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../styles/style';
import {BulletComponent} from '../bullet/bullet-component';

const BlockComponent = ({onPress, data}) => (
  <View style={style.viewCardBlock}>
    <TouchableOpacity onPress={onPress}>
      <View style={style.cardBlock}>
        <BulletComponent
          color={data.availableToSendNotice ? '#00c853' : 'red'}
        />
        <View style={style.viewAlignTextCardBlock}>
          <Text style={style.labelBlockNumber}>{data.number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);
export default BlockComponent;
