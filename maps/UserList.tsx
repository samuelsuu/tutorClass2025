import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Define the type for an item in the list
interface User {
    id: number;
    name: string;
    age: number;
}

// Sample data array
const users: User[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
];

// Functional component that renders the user list
const UserList: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>User List</Text>

            {/* Using FlatList for performance optimization */}
            {/* <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()} // Convert number to string for key
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.text}>Name: {item.name}</Text>
                        <Text style={styles.text}>Age: {item.age}</Text>
                    </View>
                )}
            /> */}


            {/* alternative approach */}
            {/* <View>
                {users.map((user) => (
                    <View key={user.id} style={styles.card}>
                        <Text style={styles.text}>Name: {user.name}</Text>
                        <Text style={styles.text}>Age: {user.age}</Text>
                    </View>
                ))}
            </View> */}

            <View>
                {users.map((us) => (
                    <View key={us.id} style={styles.card}>
                        <Text style={styles.text}>Name: {us.name}</Text>
                        <Text style={styles.text}>Age: {us.age}</Text>
                    </View>
                
                ))}
            </View>

        </View>
    );
};

// Styles
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
        marginBottom: 10,
    },
    card: {
        width: "100%",
        padding: 15,
        marginVertical: 5,
        backgroundColor: "#ddd",
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
    },
});

export default UserList;
