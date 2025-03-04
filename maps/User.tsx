import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react';


interface UserArray {
    id: number;
    name: string;
    age: number;
    followers?: number;
    nik?: string;

}

const users: UserArray[] = [
    {
        id: 1,
        name: 'samuel',
        age: 20,
        followers: 100,
        nik: "Batman"
    },
    {
        id: 2,
        name: 'john',
        age: 30,
        followers: 100,
        nik: "Catwoman"
    },
    {
        id: 3,
        name: 'peter',
        age: 40,
        followers: 100,
        nik: "Ironman"
    },
]
const User: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>User</Text>

            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()} // Convert number to string for key
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>Name: {item.name}</Text>
                        <Text style={styles.text}>Age: {item.age}</Text>
                        <Text>Followers: {item.followers}</Text>
                        <Text>NIK: {item.nik}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    },
})