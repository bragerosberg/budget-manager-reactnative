import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Month from '../month/Month';
import year from './year';

export default function Budget(props) {
  const [monthlyBudget, updateMonthlyBudget] = useState(null);

  useEffect(() => {
    updateMonthlyBudget(Math.floor(props.yearlyBudget/12));
  }, [props.yearlyBudget])

  return (
    <View>
      {year.slice(0, 12).map(month => (
        <Month key={month.key} id={month.key} monthlyBudget={monthlyBudget} month={month.month}/>    
      ))}
    </View>
  );
}
