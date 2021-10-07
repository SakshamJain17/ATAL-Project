import React, { Component } from 'react';
import { Text, View,TouchableOpacity ,StyleSheet, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class Neptune extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Text style={{ fontSize:40,  fontFamily:"agency fb", color:"black"}}>Neptune</Text>
      
      <Text style={styles.point1}>The last gas giant, about 4 times the mass of the Earth, is about 4.4751 billion km from the Sun. The thick atmosphere of Neptune is composed of 80% Nitrogen, 19% Helium, 1% Methane. The core of Neptune is composed mainly of iron, nickel and silicate material. The temperature on the gas giant is about -225 degrees C.</Text>  

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
    fontSize: 30,
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