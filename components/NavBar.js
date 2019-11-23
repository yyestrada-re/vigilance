import React from "react";
import {Image, View, Icon, tab} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Maps from './Maps';
import Commissions from './Commissions';


const TabNavigator = createBottomTabNavigator ({
 Maps: {
    screen: Maps,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/house.png")}
            style={{ width: 50, height: 50, tintColor: black }}
          />
      )
    }
 },
 Commissions: {
    screen: Commissions,
    navigationOptions: {
        tabBarLabel: "Commissions",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/contract.png")}
            style={{ width: 50, height: 50, tintColor: black}}
          />
      )
    }
 }
});

export default createAppContainer(TabNavigator)