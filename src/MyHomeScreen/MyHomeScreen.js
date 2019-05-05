import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Container, Header, Body, Title, Left, Icon, Text } from 'native-base';

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
        <View style={{ marginTop:100,marginLeft:100}}>
          <Button onPress={() => this.props.navigation.navigate('Settings')} >
            <Text>Go to Settings</Text>
          </Button>
        </View>
      </Container>
    );
  }
}