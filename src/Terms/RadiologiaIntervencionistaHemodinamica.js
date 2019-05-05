import React, { Component } from 'react';
import { Button, Container, Header, Body, Title, Left, Icon, Text, H1, Content } from 'native-base';

export default class RadiologiaIntervencionistaHemodinamica extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>
          <Body>
            <Title>Rad. Interv. Hemodinamica</Title>
          </Body>
        </Header>
        <Content>
          <H1 style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5%', marginBottom: '2%' }} >
            Rad. Interv. Hemodinamica
          </H1>
        </Content>
      </Container>
    );
  }
}