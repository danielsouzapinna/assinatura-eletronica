import React, { Component } from 'react';
import { Button, Container, Header, Body, Title, Left, Icon, Text, H1, Content } from 'native-base';

export default class HemodynamicInterventionalRadiologyStep2 extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>
          <Body>
            <Title>Termo</Title>
          </Body>
        </Header>
        <Content>
          <H1 style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5%', marginBottom: '2%' }} >
            Radiologia Intervencionista Hemodinâmica
          </H1>
          <Text> Let's go </Text>
          <Button style={{ marginTop: '3%' }} block primary onPress={() => this.props.navigation.navigate('HemodynamicInterventionalRadiologyViewPDF')}>
            <Text> Próximo </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}