// LoginScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { signInWithApple } from './AppleSignInConfig';
import { auth } from './firebaseConfig';

const LoginScreen = () => {
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
      <Button title="Sign in with Apple" onPress={signInWithApple} />
    </View>
  );
};

export default LoginScreen;
