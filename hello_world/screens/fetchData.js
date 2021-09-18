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
    FlatList,

} from 'react-native';
import  styles  from './styles';


import { ActivityIndicator, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Headline, Paragraph,TouchableRipple  } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import database from '@react-native-firebase/database';





const fetchData =({ navigation }) => {
    const [itemsArray, setItemsArray] = React.useState([]);
    const [testName, setname] = React.useState("john doe");
    
    React.useEffect(() => {
        try {
            database().ref('/fodoData').on('value', snapshot => {
                let data = snapshot.val();
                const items = Object.values(data);
                setItemsArray(items);
                console.log(items)
                });
                
        } catch (error) {
            console.log(error)
        }
    }, [itemsArray,testName]);       

    function handleSubmit(){
        try {
            var stuff = itemsArray
            console.log("length of stuff");
            console.log(stuff.length);
            var totalCals = 0 
            for (let i = 0; i < stuff.length; i++) {
                 totalCals += stuff[i].cal ;
            } 
            return totalCals;

        } catch (error) {
            return "there was an error"
        }
    }
  
    return (
    
    <View>
       <ImageBackground source={require( '../backgrounds/background3.png')} style={{width: '100%', height: '100%',resizeMode: 'cover'}}>
       <Text style={styles.big_Title} >Total Cals:</Text> 
       <Text style={styles.normText}>{handleSubmit()}</Text>
       
       </ImageBackground>
    </View>
    );
    
    
  };

export default fetchData;