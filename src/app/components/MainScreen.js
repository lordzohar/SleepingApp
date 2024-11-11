// MainScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = () => {
  return (
    <View>
      <Text>Welcome to Sleep Better!</Text>
      <Button title="Play Calming Music" onPress={() => { /* Play music */ }} />
      <Button title="Listen to Stories" onPress={() => { /* Play stories */ }} />
      <Button title="Start Meditation" onPress={() => { /* Start meditation */ }} />
    </View>
  );
};

export default MainScreen;
