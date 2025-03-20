import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Href } from 'expo-router'

const settings = () => {
  return (
    <SafeAreaView>
      <Text>Payment</Text>
      <TouchableOpacity onPress={() => router.push('/(others)/payment' as Href)}>
        <Text>Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default settings

const styles = StyleSheet.create({})