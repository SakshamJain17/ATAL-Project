import React, { Component } from 'react';
import { Text, View,TouchableOpacity ,StyleSheet, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class Mars extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Text style={{ fontSize:40,  fontFamily:"agency fb", color:"black"}}>Mars</Text>
      
      <Text style={styles.point1}>The red planet, about 246.22 million km from the sun, is mainly composed of silicon, oxygen, iron, and magnesium and probably has the consistency of soft, rocky paste. Mars' atmosphere however is 95% carbon dioxide, 3% nitrogen, 1.6% argon, and it has traces of oxygen, carbon monoxide, water, methane, and other gases, along with a lot of dust. Compared to earth, the atmosphere of Mars is extremely thin. Mars is differentiated, which—for a terrestrial planet—implies that it has a central core made up of metallic iron and nickel surrounded by a less dense, silicate mantle and crust. Like Earth, Mars appears to have a molten iron core, or at least a molten outer core. Second, its core is richer in Sulphur.</Text>  

      <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SolarSystem')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      
      </View>
                  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  point1:{
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20,
    justifyContent:'center',
    fontFamily: 'calibri-body',
    textAlign: "justify"
  },
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     fontFamily:"agency fb",
     fontWeight:"bold",
     marginTop: 20 
    },
   buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  },
})