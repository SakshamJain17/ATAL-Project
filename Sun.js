import React, { Component } from 'react';
import { Text, View,TouchableOpacity ,StyleSheet, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class Sun extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
  <Text style={{ fontSize:40,  fontFamily:"agency fb", color:"black"}}>Sun</Text>
      <Text style={styles.point1}>In the Center of the Solar System, is a star (The Sun) that keeps 8 celestial bodies(planets) in orbit due to its gravity. The sun. The sun is a red giant about 4.603 billion years old. The temperature of the sun is about 5778k or 5504C. The sun contains 91.2% Hydrogen, 8.7% helium, 0.078% Oxygen and 0.043% Carbon. The sun rotates 200km/s on its axis and takes 200 million years to travel along the milky way. 4.5 billion years later the sun will turn into a red giant and engulf all the planets in the solar system. This process of engulfing will take millions to billions of years. After consuming the last planet, Neptune, the sun will run out of hydrogen leaving its core behind and turn into a white dwarf (what stars like our sun become after they have exhausted their natural fuel).</Text>

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
