import React, { Component } from 'react';
import { Button, Container, Header, Body, Title, Left, Right, Icon, Text, H3, Content } from 'native-base';

export default class HemodynamicInterventionalRadiologyStep2 extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    let data = navigation.getParam('data', null);
    console.log(data);
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>
          <Body>
            <Title>Termo</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('HemodynamicInterventionalRadiologyStep1')}>
              <Icon name='arrow-back' />
              <Text>Voltar</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <H3 style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5%', marginBottom: '2%' }} >
            Radiologia Intervencionista Hemodinâmica
          </H3>
          <Text> {data.patient.name} </Text>
          <Button style={{ marginTop: '3%' }} block primary onPress={() => this.props.navigation.navigate('HemodynamicInterventionalRadiologyViewPDF')}>
            <Text> Próximo </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}