import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Container, Content, Form, Input, Label} from 'native-base';
import {connect} from 'react-redux';
import style from '../../../styles/style';
import {MSG_ERROR_LOGIN} from '../../utils/constants';
import {authData} from '../../store/action/auth/action-auth';
import AuthController from '../../controllers/auth/auth-controller';

const LOGO_ENCOMENDA = require('../../../assets/logo-encomenda.png');
const LOGO_ACESSE = require('../../../assets/logo-access.png');

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: 'testador@mail.com',
      password: 'admin123',
      isLoading: false,
    };
    this.authController = new AuthController();
  }

  login = async () => {
    this.setLoading(true);
    const data = {email: this.state.email, password: this.state.password};
    const authResponse = await this.authController.mobileLogin(data);
    this.setLoading(false);
    if (!authResponse.hasError) {
      this.setAuthData(authResponse);
      this.props.navigation.navigate('Menu');
    } else {
      Alert.alert('Ops :(', MSG_ERROR_LOGIN);
    }
  };

  setAuthData = (data) => {
    const dataUserLogged = {data};
    this.props.onLogin(dataUserLogged);
  };

  setLoading = (isLoading) => {
    this.setState({isLoading});
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
                {!this.state.isLoading && (
                  <Text style={style.buttonLabelLogin}>Entrar</Text>
                )}
                {this.state.isLoading && <ActivityIndicator color="#fff" />}
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

const mapDispatchToProps = (dispatch) => {
  return {onLogin: (user) => dispatch(authData(user))};
};

export default connect(null, mapDispatchToProps)(Login);
