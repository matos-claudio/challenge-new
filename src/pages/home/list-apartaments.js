import {Container, Content, Text} from 'native-base';
import React, {Component} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import HeaderDrawerComponent from '../../components/header/header-drawer-component';
import style from '../../../styles/style';
import LoadingComponent from '../../components/loading/loading-component';
import CondominiumController from '../../controllers/condominium/condominium-controller';
import BlockComponent from '../../components/block/block-component';
import ListEmptyComponent from '../../components/list-empty/list-empty-component';
import ModalSendMessageComponent from '../../components/modal/modal-send-message-component';
import PickerComponent from '../../components/picker/picker-component';
import BadgeComponent from '../../components/badge/badge-component';

const icPaper = require('../../../assets/paper.png');

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
      notices: [],
    };
    this.condominiumController = new CondominiumController();
    this.listCondominium = this.listCondominium.bind(this);
    this.listNotice = this.listNotice.bind(this);
  }

  componentDidMount = () => {
    this.loadState();
  };

  loadState = () => {
    this.setState({block: this.props.user.condominium.blocks[0].id});
    this.listCondominium(0);
    this.listNotice();
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

  listNotice = async () => {
    const getResponse = await this.condominiumController.listNotices();
    if (getResponse.hasError === false) {
      this.setState({notices: getResponse.response.data.content});
    }
    console.log(`Notices ${JSON.stringify(getResponse)}`);
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

  renderListMessages = () => {
    this.props.navigation.navigate('ListMessages', {item: this.state.blocks});
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
                style={{height: Dimensions.get('window').height / 1.5}}
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
          <View style={style.viewButtonMessages}>
            <TouchableOpacity
              style={style.buttonMessages}
              onPress={() => this.renderListMessages()}>
              <View style={style.viewButtonOrganizer}>
                <BadgeComponent size={this.state.notices.length || 0} />
                <Image source={icPaper} />
                <Text style={style.labelButtonMessages}>
                  Mensagens Enviadas
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
        <ModalSendMessageComponent
          visible={this.state.modalIsOpen}
          onPress={() => this.sendMessage()}
          onClose={() => this.setState({modalIsOpen: false})}
          numberBlock={this.state.numberBlock}
          contactName={this.state.contactName}
          secondContactName={this.state.secondContactName}
          onChangeText={(text) => this.onChangeText(text)}
        />
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
