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

} from 'react-native';
import  styles  from './styles';

import { ActivityIndicator, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Headline, Paragraph,TouchableRipple  } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import database from '@react-native-firebase/database';



const addData =({ navigation }) => {
    const [name, onChangeText] = React.useState('');
    

    const  handleSubmit = () => {
        
        database().ref('/items').push({
            name: name
          });
        Alert.alert('Item saved successfully');
    };
    return (
      <View >
        <Text >Add Item</Text>
        <TextInput  onChangeText={text => onChangeText(text)} />
        <TouchableHighlight
          
          underlayColor="white"
          onPress={handleSubmit}
        >
          <Text >Add</Text>
        </TouchableHighlight>
      </View>
    );
    
  };

export default addData;