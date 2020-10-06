import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function Form(props) {
  
  return (
    <View style={styles.formWrapper}>
      <TextInput
        onSubmitEditing={props.handleSubmitForm}
        style={{ backgroundColor: "white", color: "black" }}
        placeholder="Enter the expense"
        onChangeText={props.setName}
        value={props.name}
      />
      <TextInput 
        onSubmitEditing={props.handleSubmitForm}
        style={{ backgroundColor: "white", color: "black" }}
        placeholder="Enter the price"
        onChangeText={props.setAmount}
        keyboardType = 'number-pad'
        value={props.amount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    justifyContent: "center",
    height: 50
  }
})
