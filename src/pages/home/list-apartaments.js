import {Container, Content} from 'native-base';
import React, {Component} from 'react';
import {Text} from 'react-native';
import HeaderDrawerComponent from '../../components/header/header-drawer-component';

export default class ListApartaments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <HeaderDrawerComponent navigate={this.props.navigation} />
        <Content>
          <Text>Olaasadasdsd</Text>
        </Content>
      </Container>
    );
  }
}
