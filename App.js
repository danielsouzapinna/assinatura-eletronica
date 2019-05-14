import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { Container } from 'native-base';
import { Dimensions } from 'react-native';

//Pages
import MyHomeScreen from "./src/MyHomeScreen/MyHomeScreen"
import SettingsScreen from "./src/SettingsScreen/SettingsScreen"
import SidebarMenu from './src/SidebarMenu/SidebarMenu';

//Terms
import HemodynamicInterventionalRadiologyStep1 from './src/HemodynamicInterventionalRadiology/HemodynamicInterventionalRadiologyStep1';
import HemodynamicInterventionalRadiologyStep2 from './src/HemodynamicInterventionalRadiology/HemodynamicInterventionalRadiologyStep2';
import MagneticResonanceImaging from './src/MagneticResonanceImaging/MagneticResonanceImaging';
import EsophagealManometryAndEsophagealPHmetry from './src/EsophagealManometryAndEsophagealPHmetry/EsophagealManometryAndEsophagealPHmetry';

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
  HemodynamicInterventionalRadiologyStep1: {
    screen: HemodynamicInterventionalRadiologyStep1,
  },
  HemodynamicInterventionalRadiologyStep2: {
    screen: HemodynamicInterventionalRadiologyStep2,
  },
  MagneticResonanceImaging: {
    screen: MagneticResonanceImaging,
  },
  EsophagealManometryAndEsophagealPHmetry: {
    screen: EsophagealManometryAndEsophagealPHmetry,
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