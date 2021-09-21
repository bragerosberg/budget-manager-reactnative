import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Month from "../month/Month";
import year from "./year";

const Budget = (props) => {
  const [monthlyBudget, updateMonthlyBudget] = useState(null);
  useEffect(() => {
    updateMonthlyBudget(Math.floor(props.yearlyBudget / 12));
  }, [props.yearlyBudget]);

  return (
    <View>
      {year.map((month, index) => (
        <Month key={index} monthlyBudget={monthlyBudget} month={month} />
      ))}
    </View>
  );
};

export default Budget;
