import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Budget from '../budget/Budget';

export default function Board() {
  
  return (
    <View>
      <Text>This is the Board component</Text>
      <Budget />
    </View>
  );
}
