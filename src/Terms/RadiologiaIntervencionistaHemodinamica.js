import React, { Component } from 'react';
import { Button, Container, Header, Body, Title, Icon, Text, H1, Content, Item, Input, Label, DatePicker, Left, Right } from 'native-base';
import { YellowBox, View, TouchableHighlight, StyleSheet, PermissionsAndroid } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import fetch_blob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';
import {RNHTMLtoPDF} from 'react-native-html-to-pdf-custom';

YellowBox.ignoreWarnings(['Warning: ...']);

export default class RadiologiaIntervencionistaHemodinamica extends Component {

  constructor(props) {
    super(props);
    this.state = { signature: null, chosenDate: new Date(), name: null, cpf: null, imgPath: null, imgStr: null };
    this.setDate = this.setDate.bind(this);
    this._onSaveEvent = this._onSaveEvent.bind(this);
    this.requestExternalWriteStorage();
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  saveSign() {
    let date = new Date();
    this.refs.sign.saveImage(`signature_${date.getTime()}`);
    /* RNFS.exists('/storage/emulated/0/saved_signature/signature.png').then((result) => {
      if(result){
        console.log("Já existe uma assinatura, precisa apagar");
        RNFS.unlink('/storage/emulated/0/saved_signature/signature.png').then(() => {
          console.log('Signature deleted');
        }).catch((err) => {
          console.log('Signature deleted error: ', err.message);
        });
      }
    }).catch((err) => {
      console.log(err.message);
    }); */
  }

  resetSign() {
      this.refs["sign"].resetImage();
  }

  async _onSaveEvent(result) {
      console.log("String codificada em Base64", result.encoded);
      console.log("Caminho da imagem", result.pathName);
      /* RNFS.writeFile('/storage/emulated/0/Android/data/com.assinaturaeletronica/files/signature.png', result.encoded, 'base64').then((success) => {
        console.log('Signature success');
      }).catch((err) => {
        console.log(err.message);
      }); */
      this.createPDF(result.encoded);
  }

  async requestExternalWriteStorage() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Assinatura Eletronica - Permissão de Escrita',
          message:
            'Assinatura Eletrônica necessita de permissão de escrita ' +
            'para gerar os arquivos de assinaturas.',
          buttonNeutral: 'Perguntar Depois',
          buttonNegative: 'Não',
          buttonPositive: 'Sim',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Acesso a external files concedido');
      } else {
        console.log('Acesso a external files negado');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async createPDF(signature) {
    console.log('signaature', signature);
    
    let options = {
      html: `<h1>Assinatura Eletrônica</h1> <br><br> <img src='data:image/jpeg;base64, ${signature}'>`,
      base64: true,
      page: {
        size: RNHTMLtoPDF.page.size.UsLetter,
        orientation: RNHTMLtoPDF.page.orientation.Landscape,
      },      
    };
    
    let file = await RNHTMLtoPDF.convert(options)
    console.log('file ', file)
    let path = '/storage/emulated/0/test.pdf';

    RNFS.writeFile('/storage/emulated/0/Android/data/com.assinaturaeletronica/files/test.pdf', file.base64, 'base64').then((success) => {
      console.log('PDF gravado c  om sucesso');
    }).catch((err) => {
      console.log(err.message);
    });
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
              saveImageFileInExtStorage={true}
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

            <View style={{ flex: 1, flexDirection: "row" }}>
              <Right>
                <Button success onPress={() => { this.createPDF() } }>
                  <Text>Create PDF</Text>
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