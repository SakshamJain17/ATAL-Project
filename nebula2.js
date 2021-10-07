import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Nebula2 extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={{fontSize:40,  fontFamily:"agency fb", color:"black"}}>Reflection Nebula</Text>

        <Text style={styles.points}>In astronomy, reflection nebulae are clouds of interstellar dust which might reflect the light of a nearby star or stars. The energy from the nearby stars is insufficient to ionize the gas of the nebula to create an emission nebula but is enough to give sufficient scattering to make the dust visible. A reflection nebula is created when light from a star is scattered or reflected off a neighbouring dust cloud. ... The result is that blue light is scattered more efficiently than longer, red wavelengths giving the characteristic blue colour for these nebulae. The Pleiades is one of the most famous reflection nebulae.</Text>
         

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Nebulae')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     fontFamily:"agency fb",
     fontWeight:"bold",
     marginTop: 20 
    },
  points:{
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20,
    justifyContent:'center',
    fontFamily: 'calibri-body',
    textAlign: "justify"
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