
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems,DrawerActions } from 'react-navigation-drawer';
import { Icon } from 'native-base';


export default class SideMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView
          style={s.container}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
          <View>
                <Image style={{width: 400, height: 300}} source={{ uri: 'https://loremflickr.com/320/240/brazil,rio' }} />
               
                <Icon name='close' style={{position:'absolute', top:5, right: 5, zIndex:5, color:'#fff'}} onPress={this.props.navigation.closeDrawer}/>
                
                <View style={s.overlay}></View>
                
          </View>
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: '#0067ff',

  } 
});

