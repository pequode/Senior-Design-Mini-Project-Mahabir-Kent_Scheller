import React, { Component } from 'react';
import { useState, useRef, useEffect } from 'react';
import { GoogleSigninButton } from '@react-native-community/google-signin';
 import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Alert,
    ImageBackground,
  Pressable,

} from 'react-native';
import  styles  from './styles';

import { ActivityIndicator, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Headline, Paragraph,TouchableRipple  } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import database from '@react-native-firebase/database';



const addData =({ route, navigation }) => {
    const [name, onChangeText] = React.useState('');
    const { data, cals, serv } = route.params;
    const [dataAdded, onSuccessfulSub] = React.useState(false);
    const  handleSubmit = () => {
        
        database().ref('/fodoData').push({
            cal: cals,
            servings: serv,
          });
        Alert.alert('Item saved successfully');
        navigation.navigate('Home')

    };
    return (
      <View >
         <ImageBackground source={require( '../backgrounds/background2.png')} style={{width: '100%', height: '100%',resizeMode: 'cover'}}>
        <Text style={styles.normText}> Add Item: [cals:{cals.toString()}][servings:{serv.toString()}]</Text>

        <Pressable style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.normText} >submit?</Text>
        </Pressable>
      </ImageBackground>
      </View>
    );
    
  };

export default addData;