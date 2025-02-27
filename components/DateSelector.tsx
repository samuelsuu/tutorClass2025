import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Function to generate the dates for the current week
const getCurrentWeekDates = () => {
  const today = new Date();
  const currentDay = today.getDay(); // 0 (Sunday) - 6 (Saturday)
  const startOfWeek = new Date(today); // Clone the date
  startOfWeek.setDate(today.getDate() - currentDay); // Move to Sunday

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + index); // Move forward in the week
    return {
      day: date.toLocaleString("en-US", { weekday: "short" }).toUpperCase(), // e.g., "SUN"
      date: date.getDate(), // e.g., 23
    };
  });
};

const DateSelector = () => {
  const [dates, setDates] = useState(getCurrentWeekDates);
  const [selectedDate, setSelectedDate] = useState(dates[new Date().getDay()].date);

  useEffect(() => {
    setDates(getCurrentWeekDates());
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Serving this Month</Text>
        <Text style={styles.dateRange}>
          {dates[0].date} - {dates[6].date} {new Date().toLocaleString("en-US", { month: "short" })} (7 Days)
        </Text>
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

export default DateSelector;
