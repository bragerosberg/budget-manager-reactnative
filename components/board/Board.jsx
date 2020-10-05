import React, { useState, useEffect } from 'react';
import { Text, View, AsyncStorage, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Budget from '../budget/Budget';
import GradientButton from 'react-native-gradient-buttons';

export default function Board() {

  const [yearlyBudget, updateYearlyBudget] = useState(120000); // set to set value for development, in production the value is ""
  const [budgetSet, setBudgetStatus] = useState(true); // in product this is falsse 
  let attemptSavedBudget;
  
  _retrieveData = async () => {
    try {
      attemptSavedBudget = await AsyncStorage.getItem('budget');
      if (attemptSavedBudget !== null) {
        console.log(attemptSavedBudget);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  // useEffect(() => {
  //   if(attemptSavedBudget !== "" || attemptSavedBudget === undefined) setBudgetStatus(false);
  // }, [attemptSavedBudget ])

  const handleChange = (e) => {
    const { target } = e;
    const { value } = target;
    console.log('I am run');
    updateYearlyBudget(value);
  };

  const resetBudget = () => {
    handleSubmit();
    AsyncStorage.clear();
    updateYearlyBudget("");
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if(yearlyBudget !== "") {
      AsyncStorage.setItem('budget');
      setBudgetStatus(budgetSet => ! budgetSet);
    } else {
      alert('Invalid budget, please enter a valid number');
    }
  };
  
  return budgetSet ? (
    <View>
      <View style={{ marginTop: 25, flexDirection: "row", justifyContent: "space-between", borderBottomColor: 'black', borderBottomWidth: 2  }}>
        <View>
          <Text style={{ fontSize: 32 }}>Yearly: {yearlyBudget}</Text>
        </View>
        <TouchableOpacity>
          <GradientButton
            text="X"
            style={{ width: 50 }}
            textStyle={{ fontSize: 20 }}
            gradientBegin="#ff416c"
            gradientEnd="#ff4b2b"
            gradientDirection="linear"
            radius={25}
            height={40}
            onPressAction={resetBudget}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ marginTop: 20 }}>
        <Budget yearlyBudget={yearlyBudget}/>
      </ScrollView>

    </View>
  ) : (
    <View style={{backgroundColor: "#ece9e6"}}>
      <Text style={{marginTop: 20, textAlign: "center", fontSize: 32, color: "black" }}>Budget Manager</Text>
      <TextInput 
        placeholder="Enter yearly budget here"
        keyboardType = 'number-pad'
        onChangeText={updateYearlyBudget}
        inputStyle={{ color: 'black' }}
        style={{textAlign: "center",
        textAlign: "center",
        backgroundColor: "white",
        margin: 17,
        padding: 2,
        borderColor: "black",
        borderWidth: 1,
        }}
      />
      <GradientButton
        text="Submit"
        style={{ marginBottom: 10 }}
        textStyle={{ fontSize: 20 }}
        gradientBegin="#56ab2f"
        gradientEnd="#a8e063"
        gradientDirection="linear"
        radius={10}
        height={40}
        onPressAction={handleSubmit}
      />
    </View>
  );
}