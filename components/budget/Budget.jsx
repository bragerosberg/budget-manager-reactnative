import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Text, ScrollView, View } from 'react-native';
import Month from '../month/Month';
import year from './year';

export default function Budget(props) {
  const [monthlyBudget, updateMonthlyBudget] = useState(null);
  useEffect(() => {
    updateMonthlyBudget(Math.floor(props.yearlyBudget/12));
  }, [props.yearlyBudget])

  
  return (
    <View>
    {year.map((month, index) => (
      <View key={index}>
        <Month monthlyBudget={monthlyBudget} month={month}/>    
      </View>
    ))}
    </View>
  )
}
