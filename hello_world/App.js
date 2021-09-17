
import * as React from 'react';

import  Camera  from './screens/Camera';
import  SignIn  from './screens/SignIn';
import  addData  from './screens/addData';
import  fetchData  from './screens/fetchData';
import  styles  from './screens/styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { GoogleSigninButton } from '@react-native-community/google-signin';
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
  ImageBackground,
  Pressable,
} from 'react-native';

const Stack = createNativeStackNavigator();
GoogleSignin.configure({webClientId:'515008457162-mjfsucblgofg46bub2nlirhpraamq8lu.apps.googleusercontent.com',});






// async function onGoogleButtonPress() {
//   const { idToken } = await GoogleSignin.signIn();
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//   return auth().signInWithCredential(googleCredential);
// }
// const authenticated = () =>{
  
// };



const SignOut =() => {
  const user = auth().currentUser;
  const [authenticated, setAutheticated] = React.useState(false);
  // auth().onAuthStateChanged((user) => {
  //   if(user) {
  //     setAutheticated(true);
  //     return (<Authenticated/>);
  //   }
  //   else {
  //     setAuthenticated(false);
  //   }

  //   // if (!authenticated) {
  //   //   return (navigation.navigate('SignIn'));
  //   // }
    
  //   return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
  // })
  return (
    <View >
      
      <Text >You're Logged In</Text>
      <Image source={{ uri: user?.photoURL }} style={styles.image} />
      <Text >{user?.displayName}</Text>
      <Text >{user?.email}</Text>
      <View >
        <Button title="Signout" onPress={() => auth().signOut()} />
      </View>
    </View>)
};
//This is the home screen we need to create a login screen as well
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={require( './backgrounds/background1.png')} style={{width: '100%', height: '100%',resizeMode: 'cover'}}>
      <Button
        title="Scan barcode"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
       <Pressable style={styles.button}
        
        onPress={() => navigation.navigate('addData')}
      >
        <Text>
          add data
        </Text>
      </Pressable>
      <Button
        title="fetch data"
        onPress={() => navigation.navigate('fetchData')}
      />
      </ImageBackground>
    </View>
    
  );
};
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
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignOut" component={SignOut} />
        <Stack.Screen name="addData" component={addData} />
        <Stack.Screen name="fetchData" component={fetchData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;