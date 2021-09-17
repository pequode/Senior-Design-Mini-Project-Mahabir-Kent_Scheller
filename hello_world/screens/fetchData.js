import React, { Component } from 'react';
import { useState, useRef, useEffect } from 'react';
import type {Node} from 'react';
import { GoogleSigninButton } from '@react-native-community/google-signin';
 import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Alert,

} from 'react-native';

import { ActivityIndicator, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Headline, Paragraph,TouchableRipple  } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import database from '@react-native-firebase/database';

//import ItemComponent from '../components/ItemComponent';



const fetchData =({ navigation }) => {
    const [itemsArray, setItemsArray] = React.useState([]);
    React.useEffect(() => {
        database().ref('/items').on('value', snapshot => {
        let data = snapshot.val();
        const items = Object.values(data);
        setItemsArray(items);
        console.log(items)
        });
        console.log(itemsArray)
    }, []);

    return (
    
    <View>
      {/* {itemsArray != [] ? (
        <Text>{itemsArray[0]}</Text>
         ) : (
        <Text>No items</Text>
       )} */}
    </View>
    );
    
    
  };

export default fetchData;