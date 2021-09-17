
 import React, { Component } from 'react';
 import {   StyleSheet } from 'react-native';

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#d3d3d3',
  
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      color: 'white',
    },
    big_Title:{
      textAlign: 'center',
      marginVertical: 8,
      color: 'white',
    },
    normText:{
      textAlign: 'center',
      color: 'white',
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
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#3cb371',
      
    },
    titlescreen:{
      textAlign: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: "40%",
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#3cb371',
  
    },
  });
  
  
  
   export default styles;