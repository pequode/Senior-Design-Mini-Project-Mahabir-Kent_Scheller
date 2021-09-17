
 import React, { Component } from 'react';
 import { useState, useRef, useEffect } from 'react';
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
  const [calories, setcalories] = useState(0);
  let cameraRef = useRef(null)
  const navigation = useNavigation();


  async function callAPI(val) {
    try {
      const response = await fetch(api_1+api_key+api_3+val);
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
      </RNCamera>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'red',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: "40%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',

  },
});

export default Camera;