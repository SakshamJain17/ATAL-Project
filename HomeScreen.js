import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  ImageBackground,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
          <ImageBackground source={'../assets/space background.png'} resizeMode="cover" style={styles.image}>
      
    </ImageBackground>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SolarSystem')}>
<Text style={{ fontSize:25, color:"white", fontWeight:"bold", fontFamily: "agency fb"}}>Solar System</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('OuterUniverse')}>
<Text style={{ fontSize:25, color:"white",fontWeight:"bold", fontFamily: "agency fb"}}>Outer Universe</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('FunFacts')}>
<Text style={{ fontSize:30, color:"white",fontWeight:"bold", fontFamily: "agency fb"}}>Fun Facts</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{  fontSize:22,textAlign: 'center', margin:5 }}>Rate us</Text>
            <TouchableOpacity>
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 15,
  },
  buttons: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 20,
    width: 200,
    height: 65,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 5,
  },
 image:{
       width: 200,

 } 
});
