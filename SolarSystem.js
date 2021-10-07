import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet, ScrollView } from 'react-native';

export default class Solar extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={{ fontSize:40,  fontFamily:"agency fb", color:"black"}}> Solar System </Text>
        
        <Text style={styles.points}>The solar system is a Planetary System that Consists of 1 star (Sun), 8 planets, 1 dwarf and an asteroid belt. The solar system is found in the outskirts of the Milky Way galaxy 26000 light-years away from the centre of the milky way	(Sagittarius A*), the most suitable region for life to flourish. There are many planetary systems, just like ours, but what makes the Solar System Special, is life.</Text>
        <Text> </Text>
        
        <TouchableOpacity
              style={styles.button1}
              onPress={() => this.props.navigation.navigate('Sun')}>
              <Text style={{ fontSize:30, color:"black"}}>Sun</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button2}
              onPress={() => this.props.navigation.navigate('Mercury')}>
              <Text style={{ fontSize:25, color:"black"}}>Mercury</Text>
        </TouchableOpacity>

         <TouchableOpacity
              style={styles.button3}
              onPress={() => this.props.navigation.navigate('Venus')}>
              <Text style={{ fontSize:25, color:"black"}}>Venus</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button4}
              onPress={() => this.props.navigation.navigate('Earth')}>
              <Text style={{ fontSize:25, color:"white"}}>Earth</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button5}
              onPress={() => this.props.navigation.navigate('Mars')}>
              <Text style={{ fontSize:25, color:"black"}}>Mars</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button6}
              onPress={() => this.props.navigation.navigate('Jupiter')}>
              <Text style={{ fontSize:25, color:"black"}}>Jupiter</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button7}
              onPress={() => this.props.navigation.navigate('Saturn')}>
              <Text style={{ fontSize:25, color:"black"}}>Saturn</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button8}
              onPress={() => this.props.navigation.navigate('Uranus')}>
              <Text style={{ fontSize:25, color:"black"}}>Uranus</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button9}
              onPress={() => this.props.navigation.navigate('Neptune')}>
              <Text style={{ fontSize:25, color:"white"}}>Neptune</Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
                <Text> </Text>
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
    fontSize: 30,
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
    button1: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    borderWidth: 2,
    borderRadius: 15,
    fontFamily: 'chiller',
    backgroundColor:"orange",
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
    backgroundColor:"silver",
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
    backgroundColor:"white",
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
    backgroundColor:"mediumblue",
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
    backgroundColor:"red",
    margin: 10,
    width: 200,
    height: 50,
    },
    button6: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    borderWidth: 2,
    borderRadius: 15,
    fontFamily: 'chiller',
    backgroundColor: "burlywood",
    margin: 10,
    width: 200,
    height: 50,
    },   
    button7: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    borderWidth: 2,
    borderRadius: 15,
    fontFamily: 'chiller',
    backgroundColor: "gold",
    margin: 10,
    width: 200,
    height: 50,
    }, 
    button8: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    borderWidth: 2,
    borderRadius: 15,
    fontFamily: 'chiller',
    backgroundColor: "dodgerblue",
    margin: 10,
    width: 200,
    height: 50,
    }, 
    button9: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    borderWidth: 2,
    borderRadius: 15,
    fontFamily: 'chiller',
    backgroundColor: "blue",
    margin: 10,
    width: 200,
    height: 50,
    },  
})