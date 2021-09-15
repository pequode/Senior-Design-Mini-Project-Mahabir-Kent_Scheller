
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

const Camera = () => {
  const [isBarcodeRead, setIsBarcodeRead] = useState(false);
  const [barcodeType, setBarcodeType] = useState('');
  const [barcodeValue, setBarcodeValue] = useState('');
  let cameraRef = useRef(null)

  useEffect(() => {
     if (isBarcodeRead) {
         Alert.alert(
            barcodeType, 
            barcodeValue, 
            [
               {
                   text: 'OK',
                   onPress: () => {
                       // reset everything
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

