import React, { useState, useEffect } from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import Expense from '../expense/Expense';
import Form from '../form/Form';
const { v4: uuidv4 } = require('uuid');

export default function Month(props) {
  return (
    <View>
      <Text>{props.month}{props.monthlyBudget}</Text>
    </View>
  )
 
}
