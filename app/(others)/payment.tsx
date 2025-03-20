import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoBack from "@/components/GoBack"
import { useRouter } from 'expo-router';


const payment = () => {
    const router = useRouter(); 

    return (
        <SafeAreaView style={{backgroundColor: "pink"}}>
          <GoBack title='Plans' Press={() => router.back()}/>
        </SafeAreaView>
    )
}

export default payment

const styles = StyleSheet.create({})