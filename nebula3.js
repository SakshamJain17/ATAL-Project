import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Nebula3 extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={{fontSize:40,  fontFamily:"agency fb", color:"black"}}>Emission Nebula</Text>

        <Text style={styles.points}>An emission nebula is a nebula formed of ionized gases (a gas into which sufficient energy is provided to free electrons from atoms or molecules and to allow both species) that emit light of various wavelengths. The most common source of ionization is high-energy ultraviolet photons emitted from a nearby hot star. Emission nebulae are clouds of ionised gas that, as the name suggests, emit their own light at optical wavelengths. Their mass generally ranges from 100 to 10,000 solar masses and this material can be spread over a volume of less than a light-year to several hundred light-years.</Text>
         

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