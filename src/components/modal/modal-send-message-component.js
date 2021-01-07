import React from 'react';
import {
  Modal,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'native-base';
import style from '../../../styles/style';

const sendIcon = require('../../../assets/send.png');

const ModalSendMessageComponent = ({
  visible,
  onPress,
  onClose,
  numberBlock,
  contactName,
  secondContactName,
  onChangeText,
}) => (
  <Modal visible={visible} transparent>
    <View style={style.containerModal}>
      <View style={style.viewSubcontainerModal}>
        <TouchableOpacity onPress={onClose}>
          <Icon name="close" />
        </TouchableOpacity>
        <View style={style.viewNumberBlock}>
          <Text style={style.labelBlockNumber}>Unidade {numberBlock}</Text>
        </View>
        <View style={style.viewBodyModal}>
          <View style={style.viewResident}>
            <Text style={style.labelModal}>Responsaveis:</Text>
            <View style={style.viewMarginLeft10}>
              <Text style={style.labelName}>{contactName}</Text>
              <Text style={style.labelName}>{secondContactName}</Text>
            </View>
          </View>
          <View style={style.viewMarginTop10}>
            <Text style={style.labelModal}>Mensagem</Text>
            <TextInput
              multiline
              numberOfLines={5}
              style={style.textArea}
              onChangeText={(text) => onChangeText(text)}
            />
          </View>
          <View style={style.viewButtonModal}>
            <TouchableOpacity style={style.buttonModal} onPress={onPress}>
              <View style={style.viewButtonOrganizer}>
                <Image style={style.iconSendButtonModal} source={sendIcon} />
                <Text style={style.labelButtonModal}>Enviar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </Modal>
);

export default ModalSendMessageComponent;
