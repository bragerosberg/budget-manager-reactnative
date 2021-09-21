import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Budget from "../budget/Budget";
import GradientButton from "react-native-gradient-buttons";
import AsyncStorage from "@react-native-community/async-storage";

const Board = () => {
  const [yearlyBudget, updateYearlyBudget] = useState("");
  const [budgetSet, setBudgetStatus] = useState(false);

  const attemptStoredBudget = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem("budget"));
      if (value !== null) {
        updateYearlyBudget(value);
        setBudgetStatus(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    attemptStoredBudget();
  }, []);

  const resetBudget = () => {
    handleSubmit();
    AsyncStorage.clear();
    updateYearlyBudget("");
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (yearlyBudget !== "") {
      try {
        await AsyncStorage.setItem("budget", JSON.stringify(yearlyBudget));
      } catch (e) {
        console.log(e);
      }
      updateYearlyBudget(yearlyBudget);
      setBudgetStatus((budgetSet) => !budgetSet);
    } else {
      alert("Invalid budget, please enter a valid number");
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
        <View style={{ paddingBottom: 140 }}>
          <Budget yearlyBudget={yearlyBudget} />
        </View>
      </ScrollView>
    </View>
  ) : (
    <View style={{ backgroundColor: "#ece9e6", height: "100%" }}>
      <Text style={styles.formHeader}>Budget Manager</Text>
      <TextInput
        onSubmitEditing={handleSubmit}
        placeholder="Enter yearly budget here"
        keyboardType="number-pad"
        onChangeText={updateYearlyBudget}
        inputStyle={{ color: "black" }}
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
      <View style={styles.footerPlacement}>
        <Text style={styles.creatorFooter}>Created by Brage Røsberg</Text>
        <Text style={styles.creatorFooter}>
          MIT License Copyright (c) 2020 Brage Røsberg
        </Text>
      </View>
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  budgetWrapper: {
    paddingTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  budgetHeader: {
    fontSize: 32,
  },
  formHeader: {
    paddingTop: 20,
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
  },
  creatorFooter: {
    textAlign: "center",
    color: "#437b9c",
  },
  footerPlacement: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
