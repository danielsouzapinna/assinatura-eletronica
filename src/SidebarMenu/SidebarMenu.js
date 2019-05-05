import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'native-base';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    this.logoImage = 'https://abrilveja.files.wordpress.com/2017/12/rede-dor-sao-luiz-1-original.png?w=680&h=453&crop=1';
    this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: 'Home',
        screenToNavigate: 'Home',
      },
      {
        navOptionThumb: 'settings',
        navOptionName: 'Configurações',
        screenToNavigate: 'Settings',
      },
    ];
  }

  render() {
    return (
      <View style={styles.sideMenuContainer}>

        {/*Top Large Image */}
        <Image source={{ uri: this.logoImage }} style={styles.sideMenuLogoIcon} />
        
        {/*Divider between Top Image and Sidebar Option*/}
        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15, }} />

        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View key={key} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff', }} >
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} />
              </View>
              <Text style={{ fontSize: 15, color: global.currentScreenIndex === key ? 'red' : 'black', }} onPress={() => { global.currentScreenIndex = key; this.props.navigation.navigate(item.screenToNavigate); }} >
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuLogoIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    
  },
});