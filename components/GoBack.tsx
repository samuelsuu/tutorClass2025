import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

interface GoBackProps {
    title: string,
    Press: () => void;
}
const GoBack: React.FC<GoBackProps> = ({ title, Press }) => {
    return (
        <View style={styles.contain}>
            <TouchableOpacity onPress={Press}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.containText}>{title}</Text>
        </View>
    )
}

export default GoBack


const styles = StyleSheet.create({
    contain:{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 30,
        // marginHorizontal: 30,
        backgroundColor: "blue"
        // gap: 20,

    },
    containText:{
        fontSize: 20,
        textAlign: "center",
        width: "80%"
    }
})