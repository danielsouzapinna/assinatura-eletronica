import React, { Component } from 'react';
import { Button, Container, Header, Body, Title, Left, Icon, Text, H1, Content } from 'native-base';
import moment from "moment";

export default class MyHomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>
          <Body>
            <Title>Assinatura Eletrônica</Title>
          </Body>
        </Header>
        <Content>
          <H1 style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5%', marginBottom: '2%' }} >Termos</H1>
          <Button style={{ marginTop: '3%' }} block primary 
            onPress={() => this.props.navigation.navigate('HemodynamicInterventionalRadiologyStep1', {dateTime: moment(new Date()).format("DD/MM/YYYY HH:mm:ss") })}>
            <Text> Radiologia Intervencionista Hemodinâmica Official</Text>
          </Button>
          <Button style={{ marginTop: '3%' }} block primary onPress={() => this.props.navigation.navigate('RadiologiaIntervencionistaHemodinamica')}>
            <Text> Radiologia Intervencionista Hemodinâmica </Text>
          </Button>
          <Button style={{ marginTop: '3%' }} block primary onPress={() => this.props.navigation.navigate('RessonanciaMagnetica')}>
            <Text> Ressonância Magnética </Text>
          </Button>
          <Button style={{ marginTop: '3%' }} block primary onPress={() => this.props.navigation.navigate('TomografiaComputadorizada')}>
            <Text> Tomografia Computadorizada </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}