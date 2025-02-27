import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState(""); // Stores input value
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login status

  const handleLogin = () => {
    if (username.trim() !== "") {
      setIsLoggedIn(true); // Set login state to true
    }
  };

//   The trim() method removes any leading and trailing spaces from a string. 
// It ensures that a username containing only spaces (e.g., " ") is not considered valid.

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    setUsername(""); // Clear username input
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        // Show welcome message when logged in
        <View>
          <Text style={styles.welcomeText}>Welcome, {username}!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        // Show login form when logged out
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 10,
    textAlign: "center",
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default LoginScreen;


//How It Works:
// Initial State:

// username is an empty string ("").
// isLoggedIn is false, so the login form is shown.
// User enters a username and presses "Login":

// setUsername() updates the username state.
// handleLogin() checks if the username is not empty and sets isLoggedIn to true.
// Logged-In View:

// The app shows "Welcome, {username}!".
// A Logout button appears.
// When "Logout" is pressed:

// setIsLoggedIn(false) → Goes back to login screen.
// setUsername("") → Clears the input field.

// 🔹 Summary
// username → Stores user input.
// isLoggedIn → Controls what the user sees (login form or welcome screen).
// State updates trigger re-renders to reflect UI changes.