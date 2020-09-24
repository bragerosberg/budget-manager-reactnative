import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Board from './board/Board';

export default function App() {
  return (
    <View>
      <Board />
      <StatusBar style="auto" />
    </View>
  );
}

