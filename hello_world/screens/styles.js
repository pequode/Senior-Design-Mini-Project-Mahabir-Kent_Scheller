
 import React, { Component } from 'react';
 import {   StyleSheet } from 'react-native';

 
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
      backgroundColor: 'blue',
  
    },
  });
  
  
  
   export default styles;