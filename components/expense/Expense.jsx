import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function Expense(props) {
  const [toggleRemove, toggleRemoveStatus] = useState(false);
  const handleEditClick = () => toggleRemoveStatus(!toggleRemove);

  return toggleRemove ? (
    <View>
      <Text>{props.exp.name}</Text>
      <Text> - </Text>
      <Text>{props.exp.amount}</Text>
      <Button onPress={handleEditClick} title="Edit Expense"/>
      <Button onPress={props.deleteExpense} name={props.exp.name} id={props.exp.id} title="X"/>
    </View>
  ) : (
    <View>
      <Text>{props.exp.name}</Text>
      <Text> - </Text>
      <Text>${props.exp.amount}</Text>
      <Button onPress={handleEditClick} title="Edit Expense"/>
    </View>
  );
}
