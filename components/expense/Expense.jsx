import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export default function Expense(props) {
  const [toggleRemove, toggleRemoveStatus] = useState(false);
  const handleEditClick = () => toggleRemoveStatus(!toggleRemove);

  return toggleRemove ? (
    <View style={styles.monthExpenseEntry}>
      <Text style={styles.monthText}>{props.exp.name}</Text>
      <Text style={styles.monthText}> - </Text>
      <Text style={styles.monthAmount}>{props.exp.amount}</Text>
      <Button
        buttonStyle={{backgroundColor: "lightgray", marginLeft: 20}}
        icon={<Icon name="edit" color="orange"/>}
        onPress={handleEditClick}
      />
      <Button
        icon={<Icon name="cancel" color="red"/>}
        buttonStyle={{backgroundColor: "lightgray", marginLeft: 20}} 
        onPress={() => props.deleteExpense(props.exp.id)}  name={props.exp.name} id={props.exp.id}
      />
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
});