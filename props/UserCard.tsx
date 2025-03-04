import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface UserCardProps {
  name: string;
    age: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
 
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default UserCard;
