import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {header: null} 
     
  render() {
    return (
      <ImageBackground
        source = {require('../assets/cover.jpg')}
        style = {styles.container}>
        <View style = {styles.parentView}>
        <Image source = {require('../assets/logo.png')} style = {styles.logo}/>
            <View style = {styles.redirect}>
                <Button
                    title="Start"
                    color= '#5990BF'
                    onPress={() => this.props.navigation.navigate('Maps')}
                /> 
            </View>    
        </View>
      </ImageBackground>
    );}
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  parentView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(5,9,12, 0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'sans-serif'
  },
  logo: {
    width: 200,
    height: 200
  },
  redirect: {
    width: 80,
    height: 30,
    marginTop: 30
  }
});