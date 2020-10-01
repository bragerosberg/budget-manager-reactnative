import React, { useState, useEffect } from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import Expense from '../expense/Expense';
import Form from '../form/Form';

export default function Month(props) {
  const attemptSavedExpenses = AsyncStorage.getItem(props.month) ? AsyncStorage.getItem(props.month) : [];

  const [remainingMonth, updateMonthlyRemaining] = useState(props.monthlyBudget);
  const [expenses, setExpenses] = useState(attemptSavedExpenses);
  const [usedMonth, setMonthUsed] = useState(0);

  const [editMonth, editMonthState] = useState(false);
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  console.log(props.key, props.month);
  useEffect(() => {
    updateMonthlyRemaining(props.monthlyBudget - usedMonth);
  }, [props.monthlyBudget, usedMonth]);

  // useEffect(() => {
  //   const total = expenses.reduce((acc, cur) => acc += parseInt(cur.amount), 0);
  //   setMonthUsed(total);
  //   updateMonthlyRemaining(props.monthlyBudget - total);
  // }, [props.monthlyBudget, expenses]);

  useEffect(() => {
    AsyncStorage.setItem(props.month, expenses);
  }, [props.month, expenses])

  const handleClearExpenses = () => setExpenses([]);

  const editToggle = () => editMonthState(!editMonth);

  const handleName = (e) => setName(e.target.value);
  
  const handleAmount = (e) => setAmount(e.target.value);

  const deleteExpense = (e) => {
    const validation = window.confirm(`Are you sure you wish to delete ${e.target.name}?`);
    if(validation) {
      let expenseCopy = expenses;
      expenseCopy = expenseCopy.filter(expense => expense.id !== e.target.id);
      setExpenses(expenseCopy);
    }
  }
  
  const addExpense = () => {
    const id = uuid();
    const expense = { name, amount, id }
    setExpenses([...expenses, expense]);
    setName('');
    setAmount('');
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (name !== '' && amount > 0) {
      addExpense();
    } else {
      console.log('Invalid expense name or the amount')
    }
  }
  return editMonth ? (
    <View>
      <Text>This is the Month component</Text>
      <Expense />
      <Form />
    </View>
  ) : (
    <View>
      <Text>{props.month}</Text>
      <Text>{usedMonth}/{props.monthlyBudget}</Text>
      <Button onPress={editToggle} title="Add Expenses"/>
    </View>
  );
}
