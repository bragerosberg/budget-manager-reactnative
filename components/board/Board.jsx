import React, { useState, useEffect } from 'react';
import { Text, View, AsyncStorage, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Budget from '../budget/Budget';
import GradientButton from 'react-native-gradient-buttons';

export default function Board() {

  const [yearlyBudget, updateYearlyBudget] = useState(""); 
  const [budgetSet, setBudgetStatus] = useState(false); 
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
  
  useEffect(() => {
    console.log(attemptSavedBudget)
    if(attemptSavedBudget !== "" || attemptSavedBudget === undefined) setBudgetStatus(false);
  }, [attemptSavedBudget ])

  const handleChange = (e) => {
    const { target } = e;
    const { value } = target;
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
      <View style={styles.budgetWrapper}>
        <View>
          <Text style={styles.budgetHeader}>Yearly: {yearlyBudget}</Text>
        </View>
        <TouchableOpacity>
          <GradientButton
            text="X"
            style={styles.budgetDeleteButton}
            textStyle={{ fontSize: 20 }}
            gradientBegin="#ff416c"
            gradientEnd="#ff4b2b"
            gradientDirection="linear"
            onPressAction={resetBudget}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View>
          <Budget yearlyBudget={yearlyBudget}/>
        </View>
      </ScrollView>

    </View>
  ) : (
    <View style={{backgroundColor: "#ece9e6"}}>
      <Text style={styles.formHeader}>Budget Manager</Text>
      <TextInput        
      placeholder="Enter yearly budget here"
      keyboardType='number-pad'
      onChangeText={updateYearlyBudget}
      inputStyle={{ color: 'black' }}
      style={styles.formInput}
      />
      <GradientButton
        text="Submit"
        style={styles.formButton}
        textStyle={{ fontSize: 20 }}
        gradientBegin="#56ab2f"
        gradientEnd="#a8e063"
        gradientDirection="linear"
        onPressAction={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  budgetWrapper: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  budgetHeader: {
    fontSize: 32,
  },
  formHeader: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 32,
    color: "black", 
  },
  formInput: {
    textAlign: "center",
    backgroundColor: "white",
    margin: 17,
    padding: 2,
    borderColor: "black",
    borderWidth: 1,
  },
  formButton: {
    marginBottom: 10,
    borderRadius: 10,
    height: 40,
  },
  budgetDeleteButton: {
    width: 50,
    borderRadius: 25,
    height: 40,
  }
});
