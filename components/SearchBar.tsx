import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#A0A0A0" style={styles.icon} />
        <TextInput
          placeholder="Search lunch, dishes"
          placeholderTextColor="#A0A0A0"
          style={styles.input}
        />
      </View>

      {/* Filter Button */}
      <TouchableOpacity style={styles.filterButton}>
        <Feather name="sliders" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 15,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },

  filterButton: {
    marginLeft: 10,
    backgroundColor: "green",
    padding: 12,
    borderRadius: 10,
    shadowColor: "green",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default SearchBar;
