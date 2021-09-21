import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon, Button } from "react-native-elements";

const Expense = ({ exp: { name, amount, id } }) => {
  const [toggleRemove, toggleRemoveStatus] = useState(false);
  const handleEditClick = () => toggleRemoveStatus(!toggleRemove);

  return toggleRemove ? (
    <View style={styles.monthExpenseEntry}>
      <Text style={styles.monthText}>{name}</Text>
      <Text style={styles.monthText}> - </Text>
      <Text style={styles.monthAmount}>{amount}</Text>
      <Button
        buttonStyle={{ backgroundColor: "lightgray", marginLeft: 20 }}
        icon={<Icon name="edit" color="#437b9c" />}
        onPress={handleEditClick}
      />
      <Button
        icon={<Icon name="cancel" color="red" />}
        buttonStyle={{ backgroundColor: "lightgray", marginLeft: 20 }}
        onPress={() => props.deleteExpense(id)}
        name={name}
        id={id}
      />
    </View>
  ) : (
    <View style={styles.monthExpenseEntry}>
      <Text style={styles.monthText}>{name}</Text>
      <Text style={styles.monthText}> - </Text>
      <Text style={styles.monthAmount}>${amount}</Text>
      <Button
        buttonStyle={{ backgroundColor: "lightgray", marginLeft: 20 }}
        icon={<Icon name="edit" color="#437b9c" />}
        onPress={handleEditClick}
      />
    </View>
  );
};

export default Expense;

const styles = StyleSheet.create({
  monthExpenseEntry: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  monthText: {
    margin: 8,
  },
  monthAmount: {
    margin: 8,
    color: "#658d28",
  },
});
