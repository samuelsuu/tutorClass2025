import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const dates = [
  { day: "SUN", date: "23" },
  { day: "MON", date: "24" },
  { day: "TUE", date: "25" },
  { day: "WED", date: "26" },
  { day: "THU", date: "27" },
  { day: "FRI", date: "28" },
  { day: "SAT", date: "29" },
];

const NonDateSelector = () => {
  const [selectedDate, setSelectedDate] = useState("25");

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Serving this Month</Text>
        <Text style={styles.dateRange}>23-29 Jan (7 Days)</Text>
      </View>

      {/* Date Selection */}
      <View style={styles.dateContainer}>
        {dates.map(({ day, date }) => (
          <TouchableOpacity
            key={date}
            style={[
              styles.dateButton,
              selectedDate === date && styles.selected,
            ]}
            onPress={() => setSelectedDate(date)}
          >
            <Text style={[styles.dayText, selectedDate === date && styles.selectedDayText]}>
              {day}
            </Text>
            <Text style={[styles.dateText, selectedDate === date && styles.selectedDateText]}>
              {date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 15, marginTop: 15 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  dateRange: {
    fontSize: 14,
    color: "green",
    fontWeight: "600",
  },

  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateButton: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
  },
  selected: {
    backgroundColor: "green",
  },

  dayText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#777",
  },
  selectedDayText: {
    color: "#fff",
  },

  dateText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  selectedDateText: {
    color: "#fff",
  },
});

export default NonDateSelector;
