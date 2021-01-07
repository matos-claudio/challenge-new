import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  Body,
  Container,
  Content,
  Left,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
import style from '../../../styles/style';
import UserDataComponent from '../../components/user/user-data-component';
import {LogoComponent} from '../../components/logo/logo-component';
import {connect} from 'react-redux';

const ICON_MESSAGES = require('../../../assets/paper.png');
const ICON_FLAT = require('../../../assets/flat.png');
const ICON_GROUP = require('../../../assets/group.png');
const ICON_LOGOUT = require('../../../assets/logout.png');

class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <LogoComponent />
          <UserDataComponent user={this.props.user} />
          <List>
            <ListItem thumbnail noBorder>
              <Left>
                <Thumbnail
                  square
                  source={ICON_MESSAGES}
                  style={style.thumbnail}
                  resizeMode="contain"
                />
              </Left>
              <Body>
                <Text>Mensagens Enviadas</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail noBorder>
              <Left>
                <Thumbnail
                  square
                  source={ICON_FLAT}
                  style={style.thumbnail}
                  resizeMode="contain"
                />
              </Left>
              <Body>
                <Text>Apartamentos</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail last>
              <Left>
                <Thumbnail
                  square
                  source={ICON_GROUP}
                  style={style.thumbnail}
                  resizeMode="contain"
                />
              </Left>
              <Body>
                <Text>Moradores</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail noBorder>
              <Left>
                <Thumbnail
                  square
                  source={ICON_LOGOUT}
                  style={style.thumbnail}
                  resizeMode="contain"
                />
              </Left>
              <Body>
                <Text>Sair</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({authData}) => {
  console.log(
    `USER >>> ${JSON.stringify(authData.authData.data.response.data.user)}`,
  );
  return {user: authData.authData.data.response.data.user};
};

export default connect(mapStateToProps)(SideBar);
