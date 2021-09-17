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
import  styles  from './styles';


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
    const [testName, setname] = React.useState("john doe");
    React.useEffect(() => {
        database().ref('/items').on('value', snapshot => {
        let data = snapshot.val();
        const items = Object.values(data);
        setItemsArray(JSON.stringify(items));
        console.log(items)
        console.log(typeof items)
        });
        console.log(itemsArray)
    }, [itemsArray,testName]);
    function try_to_format(params) {
        try {
            var stuff = itemsArray
            return stuff.toString()

        } catch (error) {
            return "there was an error"
        }
        return "oops?"
    }
    // const onstuffChanged = () => {
    //     console.log("after chanage")
    //     console.log(itemsArray)
    // };
    return (
    
    <View>
       {/* {itemsArray != [] ? (
        <Text>{itemsArray[0].name}</Text>
         ) : (
        <Text>No items</Text>
       )} */}
       <Text>{try_to_format("kat")}</Text>
    </View>
    );
    
    
  };

export default fetchData;