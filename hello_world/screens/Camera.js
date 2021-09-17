
 import React, { Component } from 'react';
 import { useState, useRef, useEffect} from 'react';
 import { RNCamera } from 'react-native-camera';
 import BarcodeMask from 'react-native-barcode-mask';
 import type {Node} from 'react';
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
} from 'react-native';
import  styles  from './styles';

import { ActivityIndicator, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Headline, Paragraph,TouchableRipple  } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
const defaultBarcodeTypes = [];

var api_1 = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key="
const api_key_json = require('./api_key.json');
var api_key = api_key_json.api_key;
var api_3 = "&query="
var bar = "689544083016"


const Camera = ( ) => {
  const [isBarcodeRead, setIsBarcodeRead] = useState(false);
  const [barcodeType, setBarcodeType] = useState('');
  const [barcodeValue, setBarcodeValue] = useState('');
  const [calories, setcalories] = useState(-1);
  let cameraRef = useRef(null)
  const navigation = useNavigation();

  
  async function callAPI(val) {
    try {
      const response = await fetch(api_1+api_key+api_3+bar);
      const json = await response.json();
      const apiData = json

      if (apiData.totalHits ==0){
        console.log("no results");
      }
      else{
        console.log("results");
        kcal = (apiData.foods[0].foodNutrients[3].value);
        console.log(kcal);
        serving_size = 1
        //get user input in the future
        setcalories(serving_size*kcal)
        console.log(calories);

      }
    } catch (error) {
      console.log(error);
    }
}

  useEffect(() => {
     if (isBarcodeRead) {
         Alert.alert(
            barcodeType, 
            barcodeValue, 
            [
               {
                   text: 'API call',
                   onPress: () => {
                       // reset everything
                       callAPI(barcodeValue);
                       setIsBarcodeRead(false);
                       setBarcodeType('');
                       setBarcodeValue('');
                   }
               }
            ]
         );
     }

  }, [isBarcodeRead, barcodeType, barcodeValue]);

  const onBarcodeRead = event => {
     if (!isBarcodeRead) {
        setIsBarcodeRead(true);
        setBarcodeType(event.type);
        setBarcodeValue(event.data);
     }
  }
  function how_many_kcal(){
    if(calories != -1){
      return calories;
    }
    else {
      return 0;
    }
  }
  return (
      <RNCamera 
        ref={cameraRef}
        onBarCodeRead={onBarcodeRead} 
        style={{
            flex: 1,
            width: '100%',
          }}
        barcodeTypes={isBarcodeRead ? [] : defaultBarcodeTypes}>
          <BarcodeMask />
          <Button title="Signout" onPress={callAPI} />
          <Text style={styles.title}>Calories: {how_many_kcal()}</Text>
      </RNCamera>
  )
}



export default Camera;