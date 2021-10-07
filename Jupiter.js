import React, { Component } from 'react';
import { Text, View,TouchableOpacity ,StyleSheet, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class Jupiter extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Text style={{ fontSize:40,  fontFamily:"agency fb", color:"black"}}>Jupiter</Text>
      
      <Text style={styles.point1}>The largest planet, gas giant Jupiter is 750.54 million km away from the sun. The gas giant spins on a straight axis. The gravity of Jupiter is so strong that it has 79 moons. Jupiter spins at a rapid 28,000 miles per hour. Jupiter's extremely dense and relatively dry atmosphere is composed of a mixture of hydrogen, helium and much smaller amounts of methane and ammonia. The same mixture of elements that made Jupiter also made the Sun. Jupiter's core contains some rock and hydrogen metals. The accepted theory holds that it consists of a dense core made of a mixture of elements, the core is thought to be surrounded by a layer of liquid metallic hydrogen and helium, then the outer layer is to be dominated by molecular hydrogen. The temperature in the clouds of Jupiter is about minus 145 degrees Celsius (minus 234 degrees Fahrenheit). The temperature near the planet's centre is much, much hotter. The core temperature may be about 24,000 degrees Celsius (43,000 degrees Fahrenheit). That's hotter than the surface of the sun! Jupiter has a Great red spot, which is a storm, a storm that could fit the entire earth inside it.
</Text>  

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
    marginLeft: 15,
    marginRight: 15,
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