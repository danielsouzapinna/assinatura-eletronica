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
          </Body>
        </Header>
      </Container>
    );
  }
}