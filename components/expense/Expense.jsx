import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export default function Expense(props) {
  const [toggleRemove, toggleRemoveStatus] = useState(false);
  const handleEditClick = () => toggleRemoveStatus(!toggleRemove);

  return toggleRemove ? (
    <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
      <Text style={{margin: 8}}>{props.exp.name}</Text>
      <Text style={{margin: 8}}> - </Text>
      <Text style={{color: "#658d28", margin: 8 }}>{props.exp.amount}</Text>
      <TouchableOpacity onPress={handleEditClick}>
        <Text style={{margin: 8}}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.deleteExpense(props.exp.id)} name={props.exp.name} id={props.exp.id}>
        <Text style={{margin: 8, backgroundColor: "red", padding: 10, color: "white"}}>X</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
      <Text style={{margin: 8}}>{props.exp.name}</Text>
      <Text style={{margin: 8}}> - </Text>
      <Text style={{color: "#658d28", margin: 8 }}>${props.exp.amount}</Text>
      <TouchableOpacity onPress={handleEditClick}>
        <Text style={{margin: 8}}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}
