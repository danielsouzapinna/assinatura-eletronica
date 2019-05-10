import React, { Component } from 'react';
import { Button, Container, Header, Body, Title, Left, Right, Icon, Text, H1, Content } from 'native-base';

export default class HemodynamicInterventionalRadiologyViewPDF extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>
          <Body>
            <Title>Visualização do Termo</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('HemodynamicInterventionalRadiologyStep2')}>
              <Icon name='arrow-back' />
              <Text>Voltar</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <H1 style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5%', marginBottom: '2%' }} >
            Visualização
          </H1>
        </Content>
      </Container>
    );
  }
}