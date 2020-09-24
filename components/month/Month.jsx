import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Expense from '../expense/Expense';
import Form from '../form/Form';

export default function Month() {
  
  return (
    <View>
      <Text>This is the Month component</Text>
      <Expense />
      <Form />
    </View>
  );
}
