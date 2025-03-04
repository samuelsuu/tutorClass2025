import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Define the props type
interface GreetingProps {
  name: string;
}

// Functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <Text style={styles.text}>Hello, {name}!</Text>;
};

// Styles
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Greeting;
