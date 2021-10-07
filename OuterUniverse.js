import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class OuterUniverse extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={{fontSize:40,  fontFamily:"agency fb", color:"black"}}>Outer Universe</Text>

        <Text style={styles.points}>Outer Space refers to the celestial objects apart from our milky way Galaxy. Outer Space consists of many objects, in the presence of which, life cannot cease to exist. These are Nebulae, Quasars, Black Holes, Magnetars, Protostars and other Stars that are much more massive than our sun.</Text>
        
        <TouchableOpacity
              style={styles.button1}
              onPress={() => this.props.navigation.navigate('Nebulae')}>
              <Text style={{ fontSize:30, color:"white"}}>Nebulae</Text>
        </TouchableOpacity>  

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
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
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    borderWidth: 2,
    borderRadius: 15,
    fontFamily: "Times New Roman",
    backgroundColor:"purple",
    margin: 10,
    width: 200,
    height: 50,
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