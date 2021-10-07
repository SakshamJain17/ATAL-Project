import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Funny extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={{ fontSize:40,  fontFamily:"agency fb", color:"black"}}> Fun Facts </Text>
        <Text> </Text>
  <Text style={styles.points}>1)The rain of diamond occurs on Neptune.</Text>
  
  <Text style={styles.points}>2)The German V2 was the first rocket to reach space in 1942.</Text> 
  
  <Text style={styles.points}>3)An average cost of a full space suit is $12 Million.</Text>
  
  <Text style={styles.points}>4)One space shuttle launch almost costs $450 Million.</Text>
        
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:30, color:"white"}}>Back</Text>
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
     marginTop: 20 
    },
  points:{
    fontSize: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent:'center',
    fontFamily: 'comic sans ms',
    textAlign: "justify"  
  },  
  
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    height: 50,
  }
})