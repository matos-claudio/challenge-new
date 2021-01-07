import {Container, Content} from 'native-base';
import React, {Component} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import HeaderDrawerComponent from '../../components/header/header-drawer-component';
import style from '../../../styles/style';
import LoadingComponent from '../../components/loading/loading-component';
import CondominiumController from '../../controllers/condominium/condominium-controller';
import BlockComponent from '../../components/block/block-component';
import ListEmptyComponent from '../../components/list-empty/list-empty-component';
import ModalSendMessageComponent from '../../components/modal/modal-send-message-component';
import PickerComponent from '../../components/picker/picker-component';

class ListApartaments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block: null,
      chooseIndex: null,
      isLoading: true,
      blocks: [],
      modalIsOpen: false,
      numberBlock: null,
      contactName: '',
      secondContactName: '',
      message: '',
    };
    this.condominiumController = new CondominiumController();
    this.listCondominium = this.listCondominium.bind(this);
  }

  componentDidMount = () => {
    this.loadState();
  };

  loadState = () => {
    this.setState({block: this.props.user.condominium.blocks[0].id});
    this.listCondominium(0);
  };

  listCondominium = async (position) => {
    const id = this.props.user.condominium.blocks[position].id;
    this.setState({block: id});
    this.updateLoading(true);
    const block_id = this.props.user.condominium.blocks[position].id;
    const condominium_id = this.props.user.condominium.id;

    const data = {condominium_id, block_id};
    const getResponse = await this.condominiumController.listCondominium(data);
    if (getResponse.hasError === false) {
      this.setList(getResponse.response.data.content);
    }
    this.updateLoading(false);
  };

  setList = (content) => {
    this.setState({blocks: content});
  };

  updateLoading = (isLoading) => {
    this.setState({isLoading});
  };

  onPress = (item) => {
    this.setState({
      modalIsOpen: true,
      numberBlock: item.number,
      contactName: item.contactName,
      secondContactName: item.secondContactName ? item.secondContactName : '',
    });
  };

  onChangeText = (message) => {
    this.setState({message});
  };

  sendMessage = () => {
    if (this.state.message === '') {
      Alert.alert('Ops :(', 'Preencha o campo Mensagem');
    } else {
      // Aqui deveria ser implementada a chamada para o serviço de envio de mensagem
      Alert.alert('Sucesso :)', 'Mensagem enviada!!!');
    }
  };

  render() {
    return (
      <Container>
        <HeaderDrawerComponent navigate={this.props.navigation} />
        <PickerComponent
          onValueChange={(position) => this.listCondominium(position)}
          blocks={this.props.user.condominium.blocks}
          selectedValue={this.state.block}
        />
        <Content contentContainerStyle={style.contentContainerStyle}>
          <View style={style.containerListApartaments}>
            {this.state.isLoading && (
              <LoadingComponent message={'Buscando lista de blocos'} />
            )}
            {!this.state.isLoading && (
              <FlatList
                data={this.state.blocks}
                numColumns={4}
                renderItem={({item, index}) => (
                  <BlockComponent
                    data={item}
                    key={index}
                    onPress={() => this.onPress(item)}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={() => (
                  <ListEmptyComponent
                    message={'Nenhum item encontrado para o Bloco selecionado'}
                  />
                )}
              />
            )}
          </View>
          <ModalSendMessageComponent
            visible={this.state.modalIsOpen}
            onPress={() => this.sendMessage()}
            onClose={() => this.setState({modalIsOpen: false})}
            numberBlock={this.state.numberBlock}
            contactName={this.state.contactName}
            secondContactName={this.state.secondContactName}
            onChangeText={(text) => this.onChangeText(text)}
          />
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

export default connect(mapStateToProps)(ListApartaments);
