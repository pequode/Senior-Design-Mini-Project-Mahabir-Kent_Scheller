
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
      fontSize: 30,
      fontWeight: "bold"
    },
    big_Title:{
      textAlign: 'center',
      marginVertical: 8,
      color: 'grey',
      fontSize: 50,
      fontWeight: "bold"
    },
    normText:{
      textAlign: 'center',
      color: 'grey',
      fontSize: 20,
      fontWeight: "bold"
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
        alignItems: 'center',
        height: 40,
        marginVertical: 250,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#3cb371',
      
    },
    titlescreen:{
      textAlign: 'center',
    },
    button: {
      alignItems: 'center',
      padding: 20,
      margin: 30,
      justifyContent: 'center',
      borderRadius: 8,
      elevation: 5,
      backgroundColor: '#3cb371',
      
  
    },
  });
  
  
  
   export default styles;