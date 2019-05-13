import React, { Component } from 'react';
import { Button, Container, Header, Body, Title, Left, Icon, Text, H1, Content } from 'native-base';
import { StyleSheet } from 'react-native';

export default class MyHomeScreen extends Component {

  constructor(props) {
    super(props);
    this.requestExternalWriteStorage();
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

  render() {
    return (
      <Container>
        <Header>
          <Left style={ styles.header }>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={ styles.icon } />
          </Left>
          <Body>
            <Title>Assinatura Eletrônica</Title>
          </Body>
        </Header>
        <Content>
          <H1 style={ styles.titlePage } >Termos</H1>
          <Button style={ styles.button } block primary 
            onPress={() => this.props.navigation.navigate('HemodynamicInterventionalRadiologyStep1')}>
            <Text> Radiologia Intervencionista Hemodinâmica </Text>
          </Button>
          <Button style={ styles.button } block primary onPress={() => this.props.navigation.navigate('MagneticResonanceImaging')}>
            <Text> Ressonância Magnética </Text>
          </Button>
          <Button style={ styles.button } block primary onPress={() => this.props.navigation.navigate('ComputedTomography')}>
            <Text> Tomografia Computadorizada </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  icon: {
    color: 'white', 
    marginRight: 15,
  },
  titlePage: {
    marginRight: 'auto', 
    marginLeft: 'auto', 
    marginTop: '5%', 
    marginBottom: '2%'
  },
  button: {
    marginTop: '3%'
  }
});