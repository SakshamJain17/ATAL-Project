import React, { Component } from 'react';
import { Text, View,TouchableOpacity ,StyleSheet, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class Nebulae extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
  <Text style={{ fontSize:40,  fontFamily:"agency fb", color:"black"}}>Nebulae</Text>
      <Text style={styles.point1}>Nebulae are massive clouds of gas and dust, occupying space between stars. These also act as a nursery for new Stars. The Nebulae are of 4 types, Planetary, Emission, Dark and reflection.</Text>

        <TouchableOpacity
              style={styles.button2}
              onPress={() => this.props.navigation.navigate('Nebula1')}>
              <Text style={{ fontSize:23, color:"white"}}>Planetary Nebula</Text>
        </TouchableOpacity>

         <TouchableOpacity
              style={styles.button3}
              onPress={() => this.props.navigation.navigate('Nebula2')}>
              <Text style={{ fontSize:20, color:"white"}}>Reflection Nebula</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button4}
              onPress={() => this.props.navigation.navigate('Nebula3')}>
              <Text style={{ fontSize:23, color:"white"}}>Emission Nebula</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button5}
              onPress={() => this.props.navigation.navigate('Nebula4')}>
              <Text style={{ fontSize:23, color:"white"}}>Dark Nebula</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('OuterUniverse')}>
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
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    borderWidth: 2,
    borderRadius: 15,
    fontFamily: 'chiller',
    backgroundColor:"darkmagenta",
    margin: 10,
    width: 200,
    height: 50,
    },  
    button3: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    borderWidth: 2,
    borderRadius: 15,
    fontFamily: 'chiller',
    backgroundColor:"magenta",
    margin: 10,
    width: 200,
    height: 50,
    },  
    button4: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    borderWidth: 2,
    borderRadius: 15,
    fontFamily: 'chiller',
    backgroundColor:"crimson",
    margin: 10,
    width: 200,
    height: 50,
    },  
    button5: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    borderWidth: 2,
    borderRadius: 15,
    fontFamily: 'chiller',
    backgroundColor:"indigo",
    margin: 10,
    width: 200,
    height: 50,
    },
})
