import React, { Component } from 'react';
import { useState, useRef, useEffect } from 'react';

import { GoogleSigninButton } from '@react-native-community/google-signin';
 import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
  Alert,
  ImageBackground,
  Pressable,
} from 'react-native';
// sign in page 
import  styles  from './styles';


import { ActivityIndicator, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Headline, Paragraph,TouchableRipple  } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';


const SignIn =({ navigation }) => {
    // const user = auth().currentUser;
     const [authenticated, setAutheticated] = useState(false);

    // async function onGoogleButtonPress() {
    //     const { idToken } = await GoogleSignin.signIn();
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //     return auth().signInWithCredential(googleCredential);
    //   }
    // auth().onAuthStateChanged((user) => {
    //     if(user) {
    //         setAutheticated(true);
    //       return (<Authenticated/>);
    //     }
    //     else {
    //         setAuthenticated(false);
    //     }
    //   });
    GoogleSignin.configure(
      {
        //webClientId is required if you need offline access
        offlineAccess: true,
        webClientId:'515008457162-lt45kj9dmnv4na17e3m1drkvu1tggllv.apps.googleusercontent.com',
        androidClientId: '515008457162-d54vqe3j8omukp2f0u60h3g5039onhc7.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });
    signIn = async () => {
        try {
            console.log("fcuk12")
          await GoogleSignin.hasPlayServices();
          console.log("fcuk123")
          const userInfo = await GoogleSignin.signIn();
          console.log("fcuk32")
          setAutheticated({ userInfo });
          console.log("dones"+ userInfo)
          navigation.navigate('Home')

        } catch (error) {
            console.log("an error occured")
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("signin cancelled")
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("in progress already")
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("play service not available")
            // play services not available or outdated
          } else {
            // some other error happened
            console.log(error)
          }
        }
      };
    return (
      <View style={styles.container}>
         <ImageBackground source={require( '../backgrounds/background4.png')} style={{width: '100%', height: '100%',resizeMode: 'cover'}}>
        <ImageBackground source={require( '../backgrounds/Logo.png')} style={{width: '100%', height: '100%',resizeMode: 'cover'}}>
        <Text style={styles.title} >sign in screen</Text>
        <GoogleSigninButton onPress={signIn}/>
        </ImageBackground>
        </ImageBackground >
      </View>
    );
  };

export default SignIn;
