import React, { useState, useEffect } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import Expense from '../expense/Expense';
import Form from '../form/Form';
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
    <View>
      <Text>{props.month}</Text>
      <Text>Budget: {props.monthlyBudget}</Text>
      <Text>Remaining: {remainingMonth}</Text>
      <Text>Used: {usedMonth}</Text>

      {expenses.map(exp => (
        <Expense key={exp.id} deleteExpense={deleteExpense} exp={exp}/>
      ))}

      <View>
        <Button title="Edit Toggle" onPress={editToggle}/>
        <Form
          handleSubmitForm={handleSubmitForm}
          amount={amount}
          name={name}
          setAmount={setAmount}
          setName={setName}
        />
        <Button buttonStyle={{backgroundColor: "red"}} title="Clear expenses" onPress={handleClearExpenses}/>
      </View>

    </View>
  ) : (
    <View>
      <Text>{props.month}/{props.monthlyBudget}</Text>
      <Text>Remaining in {props.month}: {remainingMonth}</Text>
      <Button title="Edit Toggle" onPress={editToggle}/>
    </View>
  )
 
}
