import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

// Define the type for each user
interface User {
  id: number;
  name: string;
  age: number;
  image: string;
}

// Sample users array with image URLs
const users: User[] = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    age: 28,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

// Card Component to display user data
const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.age}>Age: {user.age}</Text>
    </View>
  );
};

// Main Component that maps the users and renders UserCard
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Cards</Text>

      {/* Using FlatList for efficient rendering */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserCard user={item} />}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: 250,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  age: {
    fontSize: 16,
    color: "gray",
  },
});

export default App;
