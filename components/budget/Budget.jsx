import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Month from '../month/Month';

export default function Budget() {
  return (
    <View>
      <Text>This is the Budget component</Text>
      <Month />
    </View>
  );
}
