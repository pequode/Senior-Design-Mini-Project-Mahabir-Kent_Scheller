
 import React, { Component } from 'react';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

 const defaultBarcodeTypes = [];

 const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
      hello World
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </SafeAreaView>
       );
}

//class for camera and barcode implementation
 class Camera extends Component {

  constructor(props) {
    super(props);
    this.barcode = [],
    this.state = {
      showCamera: true,
      barcodeType: '',
      barcodeValue: '',
      isBarcodeRead: false // default to false
    };
  }

  onBarCodeRead(scanResult) {
    this.setState({isBarcodeRead: true, barcodeType: scanResult.type, barcodeValue: scanResult.data});
    this.barcode = scanResult.data;
    console.log(scanResult.data);
    console.warn(scanResult.data);
  };

  componentDidUpdate() {
    const {isBarcodeRead, barcodeType, barcodeValue} = this.state;
    if (isBarcodeRead) {
       Alert.alert(barcodeType, barcodeValue, [
         { 
             text: 'OK', 
             onPress: () => {
                 // Reset everything 
                 this.setState({showCamera: false, isBarcodeRead: false, barcodeType: '', barcodeValue: ''})
             }
         }
       ]);
    }

 }


    render() {
      const {isBarcodeRead} = this.state;
      console.log(this.state);
      return (
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          style={{
            flex: 1,
            width: '100%',
          }}
          barcodeTypes={isBarcodeRead ? [] : defaultBarcodeTypes}
          >
          <BarcodeMask />
        </RNCamera>
    );
  }

 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
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
});

 
 export default Camera;