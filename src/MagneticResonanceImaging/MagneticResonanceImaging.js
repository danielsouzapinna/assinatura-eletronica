import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Icon, H1, Content } from 'native-base';
import { StyleSheet } from 'react-native';

export default class MagneticResonanceImaging extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={ styles.header }>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={ styles.icon } />
          </Left>
          <Body>
            <Title>Ressonância Magnética</Title>
          </Body>
        </Header>
        <Content>
          <H1 style={ styles.titlePage } >
            Ressonância Magnética
          </H1>
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
    },
    titlePage: {
        marginRight: 'auto', 
        marginLeft: 'auto', 
        marginTop: '5%', 
        marginBottom: '2%'
    },
});