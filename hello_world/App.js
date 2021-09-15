
import * as React from 'react';
import { Camera } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Test Layout' }}
        />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//This is the home screen we need to create a login screen as well
const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Scan barcode"
      onPress={() => navigation.navigate('Camera')}
    />
  );
};

export default MyStack;