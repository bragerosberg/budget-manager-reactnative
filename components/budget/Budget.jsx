import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Month from "../month/Month";
import year from "./year";

const Budget = ({ yearlyBudget }) => {
  const [monthlyBudget, updateMonthlyBudget] = useState(null);
  useEffect(() => {
    updateMonthlyBudget(Math.floor(yearlyBudget / 12));
  }, [yearlyBudget]);

  return (
    <View>
      {year.map((month, index) => (
        <Month key={index} monthlyBudget={monthlyBudget} month={month} />
      ))}
    </View>
  );
};

export default Budget;
