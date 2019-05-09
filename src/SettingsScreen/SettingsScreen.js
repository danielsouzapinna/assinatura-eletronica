import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title } from 'native-base';

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
            <Button transparent onPress={() => this.props.navigation.goBack()} >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Configurações</Title>
            <Text>Versão 1.0.0</Text>
          </Body>
        </Header>
      </Container>
    );
  }
}