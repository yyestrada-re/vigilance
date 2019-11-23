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

function readUserData() {
  firebase.database().ref('Users/').on('value', function (snapshot) {
      console.log(snapshot.val())
  });
}

export default class Maps extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
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
        }} >
        <MapView.Marker
          coordinate={{latitude: 41.882558, longitude: -87.63678}} //latitude and longitude will change according to the values 
          title={"november 18th, 2019"}
          description={"robbery"}
        />
        <MapView.Marker
          coordinate={{latitude: 41.8815019, longitude: -87.6355278}} //latitude and longitude will change according to the values 
          title={"november 20th, 2019"}
          description={"battery"}
        />
        <MapView.Marker
          coordinate={{latitude: 41.8838351, longitude: -87.6366302}} //latitude and longitude will change according to the values 
          title={"november 17th, 2019"}
          description={"assault"}
        />
        <MapView.Marker
          coordinate={{latitude: 41.8847116, longitude: -87.6360275}} //latitude and longitude will change according to the values 
          title={"november 15th, 2019"}
          description={"shooting"}
        />
      </MapView>
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

