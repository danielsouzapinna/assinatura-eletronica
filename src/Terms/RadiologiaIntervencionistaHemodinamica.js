import React, { Component } from 'react';
import { Button, Container, Header, Body, Title, Icon, Text, H1, Content, Item, Input, Label, DatePicker, Left, Right } from 'native-base';
import { YellowBox, View, TouchableHighlight, StyleSheet } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

YellowBox.ignoreWarnings(['Warning: ...']);

export default class RadiologiaIntervencionistaHemodinamica extends Component {

  constructor(props) {
    super(props);
    this.state = { signature: null, chosenDate: new Date(), name: null, cpf: null, imgPath: null, imgStr: null };
    this.setDate = this.setDate.bind(this);
    this._onSaveEvent = this._onSaveEvent.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  saveSign() {
    this.refs["sign"].saveImage();
  }

  resetSign() {
      this.refs["sign"].resetImage();
  }

  _onSaveEvent(result) {
      this.setState({ imgPath: result.pathName,  imgStr: result.encoded });
      console.log("String codificada em Base64", result.encoded);
      console.log("Caminho da imagem", result.pathName);
  }

  _onDragEvent() {
      // This callback will be called when the user enters signature
      console.log("dragged");
  }

  render() {

    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>
          <Body>
            <Title>Rad. Interv. Hemodinamica</Title>
          </Body>
        </Header>
        <Content>
          <H1 style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5%', marginBottom: '2%' }} >
            Rad. Interv. Hemodinamica
          </H1>


          <View style={{ flex: 1, marginTopView: '5%', marginBottom: '5%' }}>
            <Item floatingLabel style={{marginTop: '5%' }}>
              <Label>Nome Completo</Label>
              <Input id="name" name="name" onChangeText={(name) => this.setState({name})} />
            </Item>

            <Item floatingLabel style={{marginTop: '5%' }}>
              <Label>CPF</Label>
              <Input id="cpf" name="cpf" onChangeText={(cpf) => this.setState({cpf})} />
            </Item>

            {/* <Item style={{marginTop: '5%' }}>
              <Label>Data de Nascimento:</Label>
              <DatePicker
                maximumDate={new Date()}
                locale={"pt-br"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="xx/xx/xxxx"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
                disabled={false} />
            </Item> */}

            <Text style={{marginTop: '15%' }}>
              Eu { this.state.name }, portador do CPF { this.state.cpf }, declaro para os devidos fins de direito, que fui 
              prévia e adequadamente informado dos efeitos clínicos, adversos e colaterais, decorrentes da realização de 
              exames de Radiologia Intervencionista e Hemodinâmica , bem como de seu procedimento.
            </Text>

            <Label style={{marginTop: '5%' }}>Assinatura:</Label>
            <SignatureCapture style={[{height: 100, border: '01px solid black'}]}
              ref="sign"
              onSaveEvent={this._onSaveEvent}
              onDragEvent={this._onDragEvent}
              saveImageFileInExtStorage={false}
              showNativeButtons={false}
              showTitleLabel={true}
              viewMode={"portrait"}
              showBorder={true}
              />
            
            

            <View style={{ flex: 1, flexDirection: "row" }}>
              <Left>
                <Button onPress={() => { this.resetSign() } }>
                  <Text>Limpar</Text>
                </Button>
              </Left>

              <Right>
                <Button success onPress={() => { this.saveSign() } }>
                  <Text>Salvar</Text>
                </Button>
              </Right>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1, justifyContent: "center", alignItems: "center", height: 50,
    backgroundColor: "#eeeeee",
    margin: 10
  }
});
console.disableYellowBox = true;