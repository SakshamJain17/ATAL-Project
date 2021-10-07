import React, { Component } from 'react';
import { Text, View,TouchableOpacity ,StyleSheet, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class Saturn extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Text style={{ fontSize:40,  fontFamily:"agency fb", color:"black"}}>Saturn</Text>
      
      <Text style={styles.point1}>After the great Gas giant, Jupiter comes the second-largest planet in the Solar System, Saturn. About 1.4843 billion km away from the sun, this gas giant is known for its beautiful rings of asteroids. Saturn is approximately 75% hydrogen and 25% helium with traces of other substances like methane and water ice. At Saturn's centre is a dense core of metals like iron and nickel surrounded by rocky material and other compounds solidified by intense pressure and heat. It is enveloped by liquid metallic hydrogen inside a layer of liquid hydrogen similar to Jupiter's core, but considerably smaller.  Saturn is considerably colder than Jupiter being further from the Sun, with an average temperature of about -285 degrees F. Saturn has 63 moons, the biggest of which is Titan!</Text>  

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