import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { Container, Thumbnail } from 'native-base';
import { Dimensions } from 'react-native';

//Pages
import MyHomeScreen from "./src/MyHomeScreen/MyHomeScreen"
import SettingsScreen from "./src/SettingsScreen/SettingsScreen"
import SidebarMenu from './src/SidebarMenu/SidebarMenu';

//Terms
import RadiologiaIntervencionistaHemodinamica from './src/Terms/RadiologiaIntervencionistaHemodinamica';
import RessonanciaMagnetica from './src/Terms/RessonanciaMagnetica';
import TomografiaComputadorizada from './src/Terms/TomografiaComputadorizada';

const MyDrawerNavigator = createDrawerNavigator({
  Terms:{ 
    screen: MyHomeScreen,
    navigationOptions: {
      drawerLabel: 'Termos',
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      drawerLabel: 'Configurações',
    },
  },
  RadiologiaIntervencionistaHemodinamica: {
    screen: RadiologiaIntervencionistaHemodinamica,
  },
  RessonanciaMagnetica: {
    screen: RessonanciaMagnetica,
  },
  TomografiaComputadorizada: {
    screen: TomografiaComputadorizada,
  },
},
{
  contentComponent: SidebarMenu,
  drawerWidth: Dimensions.get('window').width - 130,
}

);
const MyApp = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <MyApp >
        </MyApp >
      </Container>
    );
  }
}