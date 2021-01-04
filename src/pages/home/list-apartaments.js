import {Container, Content, Picker} from 'native-base';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import HeaderDrawerComponent from '../../components/header/header-drawer-component';
import style from '../../../styles/style';
import LoadingComponent from '../../components/loading/loading-component';

class ListApartaments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block: this.props.user.condominium.blocks[0].id,
    };
  }
  render() {
    return (
      <Container>
        <HeaderDrawerComponent navigate={this.props.navigation} />
        <Content contentContainerStyle={style.contentContainerStyle}>
          <View>
            <Picker
              note
              mode="dropdown"
              style={style.picker}
              selectedValue={this.state.block}
              onValueChange={(itemValue, itemPosition) =>
                this.setState({
                  block: itemValue,
                  chooseIndex: itemPosition,
                })
              }>
              {this.props.user.condominium.blocks.map((b) => (
                <Picker.Item label={b.name} value={b.id} />
              ))}
            </Picker>
          </View>
          <View style={style.container}>
            <LoadingComponent message={'Buscando lista de blocos'} />
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({authData}) => {
  return {user: authData.authData.data.response.data.user};
};

export default connect(mapStateToProps)(ListApartaments);
