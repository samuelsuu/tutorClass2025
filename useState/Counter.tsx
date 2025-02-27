import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

const Counter = () => {
  // useState hook to manage count state
  const [count, setCount] = useState(0);

  // Function to increase count by 1
  // const increment = () => {
  //   setCount(count + 1);
  // };


  function increment () {
    setCount(count + 1);
  }

  function decrement () {
    setCount(count - 1);
  }

  function reset () {
    setCount(0);
  }

  function hello () {
    Alert.alert('hello, how are you')
  }


  // Function to decrease count by 1
  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // Function to reset count to 0
  // const reset = () => {
  //   setCount(0);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Simple Counter</Text>
      <Text style={styles.count}>Current Count: {count}</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={increment} />
        <Button title="Decrease" onPress={decrement} />
        <Button title="Reset" onPress={reset} />
        <Button title="Greetings" onPress={hello} />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  count: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});

export default Counter;
