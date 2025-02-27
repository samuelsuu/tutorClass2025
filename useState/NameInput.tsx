import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const UserForm = () => {
  // useState to manage input values
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    Alert.alert("Form Submitted", `Email: ${email}\nfirstname: ${firstName}\nlastname: ${lastName}`);
  };

  // function handleSubmit() {
  //   Alert.alert("form submitted", + " " + username + " " + email)
  // }

  function namey() {
    Alert.alert("your name is" + " " + firstName + " " + lastName)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Form</Text>

      {/* Name Input */}
      {/* <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      /> */}



      <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your last name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />


      {/* username */}
      {/* <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={username}
        onChangeText={(text) => setUsername(text)}
      /> */}

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Name" onPress={namey} />

      {/* Displaying input values */}
      <Text style={styles.displayText}>Entered firstName: {firstName}</Text>
      <Text style={styles.displayText}>Entered LastName {lastName}</Text>
    </View>
  );
};

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
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  displayText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default UserForm;
