import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Expense(props) {
  const [toggleRemove, toggleRemoveStatus] = useState(false);
  const handleEditClick = () => toggleRemoveStatus(!toggleRemove);

  return toggleRemove ? (
    <View style={styles.monthExpenseEntry}>
      <Text style={styles.monthText}>{props.exp.name}</Text>
      <Text style={styles.monthText}> - </Text>
      <Text style={styles.monthAmount}>{props.exp.amount}</Text>
      <TouchableOpacity onPress={handleEditClick}>
        <Text style={styles.monthText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.deleteExpense(props.exp.id)} name={props.exp.name} id={props.exp.id}>
        <Text style={styles.monthDelete}>X</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.monthExpenseEntry}>
      <Text style={styles.monthText}>{props.exp.name}</Text>
      <Text style={styles.monthText}> - </Text>
      <Text style={ styles.monthAmount }>${props.exp.amount}</Text>
      <TouchableOpacity onPress={handleEditClick}>
        <Text style={styles.monthText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  monthExpenseEntry: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  monthText: {
    margin: 8
  },
  monthAmount: {
    margin: 8,
    color: "#658d28"
  },
  monthDelete: {
    margin: 8,
    backgroundColor: "red",
    padding: 10,
    color: "white"
  },
});