import React, { useState, useEffect } from 'react';
import { Text, View, AsyncStorage, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Expense from '../expense/Expense';
import Form from '../form/Form';
import GradientButton from 'react-native-gradient-buttons';
const { v4: uuidv4 } = require('uuid');

export default function Month(props) {
  const [remainingMonth, updateMonthlyRemaining] = useState(props.monthlyBudget)
  const [expenses, setExpenses] = useState([]);
  const [usedMonth, setUsedMonth] = useState(0);

  const [editMonth, editMonthState] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    updateMonthlyRemaining(props.monthlyBudget - usedMonth);
  }, [props.monthlyBudget, usedMonth]);

  useEffect(() => {
    const total = expenses.reduce((acc, cur) => acc + parseInt(cur.amount), 0);
    setUsedMonth(total);
    updateMonthlyRemaining(props.monthlyBudget - total);
  }, [props.monthlyBudget, expenses])

  const handleClearExpenses = () => setExpenses([]);

  const editToggle = () => editMonthState(!editMonth);

  const deleteExpense = (e) => {
    let expenseCopy = expenses;
    expenseCopy = expenseCopy.filter(exp => exp.id !== e.target.id);
    setExpenses(expenseCopy);
  }

  const addExpense = () => {
    const id = uuidv4();
    const expense = { name, amount, id }
    setExpenses([...expenses, expense]);
    setName('');
    setAmount(''); 
  }

  const handleSubmitForm = (e) => {
    if (e) e.preventDefault();
    if (name !== '' && amount > 0) {
      addExpense();
    } else {
      console.log('Invalid expense name or amount');
    }
  }
  return editMonth ? (
    <View style={{ backgroundColor: "lightgrey" }}>
      <Text style={{textAlign: "center"}}>{props.month}</Text>
      <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row"}}>
        <Text style={{ color: "#437b9c" }}>Budget:</Text>
        <Text>{props.monthlyBudget}</Text>
        <Text style={{ color: "#437b9c" }}>Remaining:</Text>
        <Text>{remainingMonth}</Text>
        <Text style={{ color: "#437b9c" }}>Used:</Text>
        <Text>{usedMonth}</Text>
      </View>

      {expenses.map(exp => (
        <Expense key={exp.id} deleteExpense={deleteExpense} exp={exp}/>
      ))}

      <View style={{flex: 1, flexDirection: "row", borderBottomColor: "black", borderBottomWidth: 2 }}>
        <Button
          title="<"
          buttonStyle={{backgroundColor: "green", flex: 1, fontSize: 16, padding: 30, marginRight: 20 }}
          style={{ flex: 1, fontSize: 16 }}
          onPress={editToggle}
        />
        <Form
          handleSubmitForm={handleSubmitForm}
          amount={amount}
          name={name}
          setAmount={setAmount}
          setName={setName}
        />
        <Button 
          title="X"
          buttonStyle={{backgroundColor: "#ff416c", flex: 1, fontSize: 16, padding: 30, marginLeft: 20 }}
          onPress={handleClearExpenses}
        />
      </View>

    </View>
  ) : (
    <View style={{flex: 1, justifyContent: 'space-evenly', backgroundColor: "lightgrey", alignItems: 'center',  borderBottomColor: 'black', borderBottomWidth: 2 }}>
      <Text style={{ fontSize: 24 }}>{props.month}</Text>
      <Text>{usedMonth}/{props.monthlyBudget}</Text>
      <GradientButton
        text="Add Expense"
        style={{ flex: 1, margin: 10 }}
        textStyle={{ fontSize: 16 }}
        gradientBegin="#76b852"
        gradientEnd="#8dc26f"
        gradientDirection="linear"
        radius={5}
        height={25}
        width={135}
        onPressAction={editToggle}
      />
    </View>
  )
 
}
