import React, { Component } from 'react';
import { Container, Content, Header, Left, Icon, Body, Title, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={ styles.header }>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={ styles.icon } />
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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  icon: {
    color: 'white', 
    marginRight: 15
  }
});