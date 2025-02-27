import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={styles.header}>

            <TouchableOpacity>
                <Ionicons name="grid-outline" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.location}>
                <Ionicons name="location-outline" size={18} color="green" />
                <Text style={styles.locationText}>Dhanmondi, Dhaka</Text>
                <Ionicons name="chevron-down" size={18} color="green" style={styles.dropdownIcon} />
            </View>

            <TouchableOpacity>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        alignItems: "center",
    },
    location: { flexDirection: "row", alignItems: "center" },
    locationText: { marginLeft: 5, fontSize: 14 },
});

export default Header;
