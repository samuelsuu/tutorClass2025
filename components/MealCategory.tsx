import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { images } from "@/content/assets";

const mealCategories = [
  { id: "snacks", name: "Snacks", image: images.appLogo },
  { id: "breakfast", name: "Breakfast", image: images.appLogo },
  { id: "lunch", name: "Lunch", image: images.appLogo },
  { id: "dinner", name: "Dinner", image: images.appLogo },
];

const MealCategories = () => {
  const [selectedMeal, setSelectedMeal] = useState("breakfast");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todays Meal</Text>
      <View style={styles.mealContainer}>
        {mealCategories.map((meal) => (
          <TouchableOpacity
            key={meal.id}
            style={[
              styles.mealItem,
              selectedMeal === meal.id && styles.selectedMeal,
            ]}
            onPress={() => setSelectedMeal(meal.id)}
          >
            <View
              style={[
                styles.imageContainer,
                selectedMeal === meal.id && styles.selectedImageContainer,
              ]}
            >
              <Image source={meal.image} style={styles.image} />
            </View>
            <Text
              style={[
                styles.mealText,
                selectedMeal === meal.id && styles.selectedMealText,
              ]}
            >
              {meal.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  mealContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mealItem: {
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
    padding: 15,
  },
  selectedImageContainer: {
    backgroundColor: "green",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  mealText: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
  selectedMealText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default MealCategories;
