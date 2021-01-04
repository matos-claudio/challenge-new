import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Container, Content, Form, Input, Label} from 'native-base';
import style from '../../../styles/style';
import {
  CONST_EMAIL,
  CONST_PASSWORD,
  MSG_ERROR_LOGIN,
} from '../../utils/constants';

const LOGO_ENCOMENDA = require('../../../assets/logo-encomenda.png');
const LOGO_ACESSE = require('../../../assets/logo-access.png');

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: 'testador@mail.com',
      password: 'admin123',
    };
  }

  login = () => {
    if (
      this.state.email === CONST_EMAIL &&
      this.state.password === CONST_PASSWORD
    ) {
      this.props.navigation.navigate('Menu');
    } else {
      Alert.alert('Ops :(', MSG_ERROR_LOGIN);
    }
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Content contentContainerStyle={style.contentContainerStyle}>
          <View style={[style.containerFlex1, style.viewLogo]}>
            <Image
              source={LOGO_ENCOMENDA}
              resizeMode="contain"
              style={style.logo}
            />
          </View>
          <View style={[style.containerFlex1, style.organizer]}>
            <Form style={style.form}>
              <Label>E-mail</Label>
              <Input
                style={style.input}
                keyboardType="email-address"
                autoCapitalize="none"
                maxLength={40}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
              <Label style={style.marginTopOrganizer10}>Senha</Label>
              <Input
                style={style.input}
                secureTextEntry
                autoCapitalize="none"
                maxLength={20}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
            </Form>
            <View style={style.viewButtons}>
              <TouchableOpacity
                style={style.loginButton}
                onPress={() => this.login()}>
                <Text style={style.buttonLabelLogin}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.buttonPasswordRecover}>
                <Text style={style.buttonLabelRecover}>Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[style.containerFlex1, style.viewFooter]}>
            <Image
              source={LOGO_ACESSE}
              resizeMode="contain"
              style={style.logoFooter}
            />
            <Text style={style.buttonLabelRecover}>Acesse Tecnologia</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
