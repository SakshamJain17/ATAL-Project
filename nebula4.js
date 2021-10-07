import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Nebula4 extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={{fontSize:40,  fontFamily:"agency fb", color:"black"}}>Dark Nebula</Text>

        <Text style={styles.points}>A dark nebula or absorption nebula is a type of interstellar cloud, particularly molecular clouds, that is so dense that it obscures the visible wavelengths of light from objects behind it, such as background stars and emission or reflection nebulae. Dark nebulae are interstellar clouds that contain a very high concentration of dust. This allows them to scatter and absorb all incident optical light, making them completely opaque at visible wavelengths.</Text>
         

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