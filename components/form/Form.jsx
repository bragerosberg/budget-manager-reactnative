import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function Form(props) {
  
  return (
    <View style={{ flex: 1, justifyContent: "center", width: 500 }}>
      <TextInput
        style={{ backgroundColor: "white", color: "black" }}
        placeholder="Enter the expense"
        onChangeText={props.setName}
        value={props.name}
      />
      <TextInput
        style={{ backgroundColor: "white", color: "black" }}
        placeholder="Enter the price"
        onChangeText={props.setAmount}
        keyboardType = 'number-pad'
        value={props.amount}
      />
      <Button title="Submit" onPress={props.handleSubmitForm} buttonStyle={{bacgkroundColor: "green"}}/>
    </View>
  );
}
