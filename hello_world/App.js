
import * as React from 'react';
import { Camera } from './screens';
// import { SignIn } from './screens/SignIn.js';
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
} from 'react-native';
import type {Node} from 'react';
const Stack = createNativeStackNavigator();
GoogleSignin.configure({webClientId:'515008457162-mjfsucblgofg46bub2nlirhpraamq8lu.apps.googleusercontent.com',});
const [authenticated, setAutheticated] = useState(false);

auth().onAuthStateChanged((user) => {
  if(user) {
    setAutheticated(true);
  }
  if (authenticated) {
    return <Authenticated/>;
  }
  
  return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
})


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
        <Stack.Screen name="SignOut" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
async function onGoogleButtonPress() {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}
const SignIn =({ navigation }) => {
  
  return (
    <View>
      <Text>sign in screen</Text>
      <GoogleSigninButton onPress={ onGoogleButtonPress }/>
    </View>
  );
};
const SignOut =() => {
  const user = auth().currentUser;
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>You're Logged In</Text>
      <Image source={{ uri: user?.photoURL }} style={styles.image} />
      <Text style={styles.text}>{user?.displayName}</Text>
      <Text style={styles.text}>{user?.email}</Text>
      <View style={{ marginTop: 30 }}>
        <Button title="Signout" onPress={() => auth().signOut()} />
      </View>
    </View>)
};
//This is the home screen we need to create a login screen as well
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Scan barcode"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default MyStack;