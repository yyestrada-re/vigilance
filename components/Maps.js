import MapView from 'react-native-maps';
import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet, Dimensions} from 'react-native';
import { Constants } from 'expo';
import * as firebase from 'firebase';

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "<AIzaSyB2ovhsg0gOFIFGveurfI99k9wBpOrGV-4>",
  authDomain: "vigilance-fc1bc.firebaseapp.com",
  databaseURL: "https://vigilance-fc1bc.firebaseio.com/",
  storageBucket: "gs://vigilance-fc1bc.appspot.com"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();


export default class Maps extends React.Component {
  static route = {
    navigationBar: {
      visible: true,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}initialRegion={{
          latitude: 41.882558,
          longitude: -87.637241,
          latitudeDelta: 0.05,
          longitudeDelta: 0.03
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'black',
    width: '100%',
    height: '100%',
    borderColor: '#AAABA7',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

