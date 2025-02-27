import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { images } from "@/content/assets";

const popularFoods = [
  {
    id: "1",
    name: "Bhuna Khichuri and Thai Chicken",
    image: images.appLogo,
    rating: 4.8,
    calories: 150,
  },
  {
    id: "2",
    name: "Mexican Vegetables and Salad",
    image: images.appLogo,
    rating: 4.3,
    calories: 168,
  },
  {
    id: "3",
    name: "Bhuna Khichuri and Thai Chicken",
    image: images.appLogo,
    rating: 7.7,
    calories: 250,
  },
  {
    id: "4",
    name: "Bhuna Khichuri and Thai Chicken",
    image: images.appLogo,
    rating: 4.8,
    calories: 120,
  },
];

const PopularFood = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={popularFoods}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.row}>
                <Ionicons name="flame" size={16} color="orange" />
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.calories}>{item.calories} Kcal</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    fontSize: 14,
    color: "green",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: "center",
    elevation: 2,
  },
  foodImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  foodName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 12,
    color: "#333",
    marginLeft: 5,
  },
  calories: {
    fontSize: 12,
    color: "#666",
  },
  addButton: {
    backgroundColor: "green",
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    alignItems: "center",
  },
});

export default PopularFood;
