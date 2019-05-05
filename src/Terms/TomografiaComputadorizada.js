import React, { Component } from 'react';
import { Button, Container, Header, Body, Title, Left, Icon, Text, H1, Content } from 'native-base';

export default class TomografiaComputadorizada extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>
          <Body>
            <Title>Tomografia Computadorizada</Title>
          </Body>
        </Header>
        <Content>
          <H1 style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5%', marginBottom: '2%' }} >
            Tomografia Computadorizada
          </H1>
        </Content>
      </Container>
    );
  }
}