import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function Form(props) {
  
  return (
    <View>
      <TextInput
        placeholder="Enter the expense"
        onChangeText={props.setName}
        value={props.name}
      />
      <TextInput
        placeholder="Enter the price"
        onChangeText={props.setAmount}
        keyboardType = 'number-pad'
        value={props.amount}
      />
      <Button title="Submit" onPress={props.handleSubmitForm} buttonStyle={{bacgkroundColor: "green"}}/>
    </View>
  );
}
