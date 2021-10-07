import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Nebula1 extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={{fontSize:40,  fontFamily:"agency fb", color:"black"}}>Planetary Nebula</Text>

        <Text style={styles.points}>A planetary nebula is an expanding, glowing shell of hot gas (plasma) that is cast-off towards the end of a low-mass star's life. Don’t go by its name, the Planetary Nebula has nothing to do with planets, it was named so because it looked like a planet to the astronauts through a telescope from Earth. A planetary nebula forms when a star can no longer support itself by fusion reactions in its centre. The gravity from the material in the outer part of the star takes its inevitable toll on the structure of the star and forces the inner parts to condense and heat up.</Text>
         

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