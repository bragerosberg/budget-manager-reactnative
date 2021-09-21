import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Form = ({ handleSubmitForm, setName, setAmount, name, amount }) => {
  return (
    <View style={styles.formWrapper}>
      <TextInput
        onSubmitEditing={handleSubmitForm}
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: 20,
          marginBottom: 2,
          padding: 2,
        }}
        placeholder="Enter the expense..."
        onChangeText={setName}
        value={name}
      />
      <TextInput
        onSubmitEditing={handleSubmitForm}
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: 20,
          marginBottom: 2,
          padding: 2,
        }}
        placeholder="Enter the price..."
        onChangeText={setAmount}
        keyboardType="number-pad"
        value={amount}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    justifyContent: "center",
    height: 50,
    paddingBottom: 20,
    borderRadius: 2,
  },
});
