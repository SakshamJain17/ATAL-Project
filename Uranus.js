import React, { Component } from 'react';
import { Text, View,TouchableOpacity ,StyleSheet, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class Uranus extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Text style={{ fontSize:40,  fontFamily:"agency fb", color:"black"}}>Uranus</Text>
      
      <Text style={styles.point1}>Uranus is another gas giant, rather small than Saturn, and 2.9billion km away from the sun. The atmosphere of Uranus is mainly composed of hydrogen and helium, with a small amount of methane and traces of water and ammonia. The methane gives Uranus its signature blue colour. The core is composed of methane and ammonia ice. The liquid core makes up 80 per cent of the mass of the planet. Uranus is freezing -213 degrees C.</Text>  

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