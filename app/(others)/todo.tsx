import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

interface Todo {
  id: string;
  text: string;
}

export default function Todoy() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  // Add new todo
  const addTodo = () => {
    if (!inputText.trim()) return;
    // setTodos([{ id: Date.now().toString(), text: inputText }, ...todos]);
    setTodos([...todos, { id: Date.now().toString(), text: inputText }])
    setInputText("");
  };

  // Update existing todo
  // Function to update an existing todo item
  const updateTodo = () => {
    // Return if input is empty
    if (!inputText.trim()) return;
    // Map through todos and update the matching todo
    setTodos(
      todos.map((todo) =>
        todo.id === editingId ? { ...todo, text: inputText } : todo
      )
    );
    // Reset editing state
    setEditingId(null);
    setInputText("");
  };


  // Delete a todo
  const deleteTodo = (id: string) => {
    Alert.alert("Delete", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", onPress: () => setTodos(todos.filter((t) => t.id !== id)) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo..."
          value={inputText}
          onChangeText={setInputText}
        />
        <Button
          title={editingId ? "Update" : "Add"}
          onPress={editingId ? updateTodo : addTodo}
        />

        {/* <Text>{inputText}</Text> */}
      </View>

      {/* <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => {
                  setInputText(item.text);
                  setEditingId(item.id);
                }}
              >
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      /> */}

      <View>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            <Text style={styles.todoText}>{todo.text}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => {
                  setInputText(todo.text);
                  setEditingId(todo.id);
                }}
              >
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>

        ))}
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f4f4f4" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  inputContainer: { flexDirection: "row", marginBottom: 10 },
  input: { flex: 1, borderWidth: 1, padding: 8, borderRadius: 5, marginRight: 5 },
  todoItem: { backgroundColor: "#fff", padding: 10, marginBottom: 5, borderRadius: 5 },
  todoText: { fontSize: 16 },
  actions: { flexDirection: "row", justifyContent: "space-between", marginTop: 5 },
  edit: { color: "blue", marginRight: 10 },
  delete: { color: "red" },
});

