import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { Container, Thumbnail } from 'native-base';
import { Dimensions } from 'react-native';

//Pages
import MyHomeScreen from "./src/MyHomeScreen/MyHomeScreen"
import SettingsScreen from "./src/SettingsScreen/SettingsScreen"
import SidebarMenu from './src/SidebarMenu/SidebarMenu';

const MyDrawerNavigator = createDrawerNavigator({
  Home:{ 
    screen: MyHomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      drawerLabel: 'Configurações',
    },
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