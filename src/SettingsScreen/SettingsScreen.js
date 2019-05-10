import React, { Component } from 'react';
import { Container, Content, Header, Left, Button, Icon, Body, Title, Text } from 'native-base';

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>
          <Body>
            <Title>Configurações</Title>
          </Body>
        </Header>
        <Content>
          <Text>Versão 1.0.0</Text>
        </Content>
      </Container>
    );
  }
}