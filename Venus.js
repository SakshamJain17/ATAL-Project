import React, { Component } from 'react';
import { Text, View,TouchableOpacity ,StyleSheet, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class Venus extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Text style={{ fontSize:40,  fontFamily:"agency fb", color:"black"}}>Venus</Text>
      
      <Text style={styles.point1}>Venus is the second planet in the solar system, 108.94 million km away from the sun. Venus is also known as the “Evening Star” because it can be seen from Earth with the naked eye in the evening. The temperature of Venus is  900 degrees F. Venus has a thick, toxic atmosphere filled with carbon dioxide. Due to its yellowish clouds made up of sulfuric acid, the greenhouse effect is intense. That is why Venus is the hottest planet in our solar system, even though Mercury is closer to the Sun. The interior of Venus is made of a metallic iron core that's roughly 2,400 miles (6,000 km) wide. Venus' molten rocky mantle is roughly 1,200 miles (3,000 km) thick. Venus' crust is mostly basalt and is estimated to be 6 to 12 miles (10 to 20 km) thick, on average. </Text>  

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