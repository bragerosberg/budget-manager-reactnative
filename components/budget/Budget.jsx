import React, { useState, useEffect } from 'react';
import { Text, ScrollView  } from 'react-native';
import Month from '../month/Month';
import year from './year';

export default function Budget(props) {
  const [monthlyBudget, updateMonthlyBudget] = useState(null);

  useEffect(() => {
    updateMonthlyBudget(Math.floor(props.yearlyBudget/12));
  }, [props.yearlyBudget])

  return (
    <ScrollView>
      {year.map(month => (
        <Month key={month.key} id={month.key} monthlyBudget={monthlyBudget} month={month.month}/>    
      ))}
    </ScrollView>
  );
}
