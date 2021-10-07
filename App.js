import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';
import FunFacts from './screens/FunFacts';
import MilkyWay from './screens/MilkyWay';
import OuterUniverse from './screens/OuterUniverse';
import SolarSystem from './screens/SolarSystem';
import Sun from './SubScreens/Sun';
import Mercury from './SubScreens/Mercury';
import Venus from './SubScreens/Venus';
import Earth from './SubScreens/Earth';
import Mars from './SubScreens/Mars';
import Jupiter from './SubScreens/Jupiter';
import Saturn from './SubScreens/Saturn';
import Uranus from './SubScreens/Uranus';
import Neptune from './SubScreens/Neptune';
import Nebulae from './SubScreens/Nebulae';
import Nebula1 from './SubScreens/nebula1';
import Nebula2 from './SubScreens/nebula2';
import Nebula3 from './SubScreens/nebula3';
import Nebula4 from './SubScreens/nebula4';


export default class App extends React.Component {
  render() {
    return (
    <View style={{ backgroundColor: 'aqua', flex: 1 }}>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SolarSystem: SolarSystem,
  MilkyWay: MilkyWay,
  OuterUniverse: OuterUniverse,
  FunFacts: FunFacts,
  Sun: Sun,
  Mercury: Mercury,
  Venus: Venus,
  Earth: Earth,
  Mars: Mars,
  Jupiter: Jupiter,
  Saturn: Saturn,
  Uranus: Uranus,
  Neptune: Neptune,
  Nebulae: Nebulae,
  Nebula1: Nebula1,
  Nebula2: Nebula2,
  Nebula3: Nebula3,
  Nebula4: Nebula4,
});

const AppContainer = createAppContainer(AppNavigator);

