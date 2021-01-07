import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Container, Content} from 'native-base';
import style from '../../../styles/style';
import HeaderArrowBackComponent from '../../components/header/header-arrow-back-component';

export default class ListMessages extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;
    this.messages = navigation.getParam('item');
    this.state = {
      notices: this.messages,
    };
    console.log(`CONTENT ${JSON.stringify(this.messages)}`);
  }
  onBack = () => {
    this.props.navigation.goBack();
  };
  onSearch = (text) => {
    const newData = this.state.notices.filter((item) => {
      const itemData = `${item.block.toUpperCase()} || ${item.number} || ${
        item.contactName
      }`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({notices: newData});
  };

  render() {
    return (
      <Container>
        <HeaderArrowBackComponent
          onPress={() => this.onBack()}
          onSearch={(text) => this.onSearch(text)}
        />
        <Content contentContainerStyle={style.contentContainerStyle}>
          <View style={style.viewResults}>
            <Text style={style.labelResults}>Resultados</Text>
          </View>
          <FlatList
            data={this.state.notices}
            renderItem={({item, index}) => (
              <View style={style.viewListMessages} key={index}>
                <Text style={style.labelListMessages}>
                  {item.block} - Unidade {item.number}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={style.labelNames}>Responsáveis</Text>
                  <View style={style.viewMarginLeft10}>
                    <Text style={style.labelNames}>{item.contactName}</Text>
                    <Text style={style.labelNames}>
                      {item.secondContactName ? item.secondContactName : ''}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </Content>
      </Container>
    );
  }
}
