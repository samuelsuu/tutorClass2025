import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Href } from 'expo-router'
import Sam from '@/props/Sam'

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
      <TouchableOpacity onPress={() => router.push('/(others)/payment' as Href)}>
        <Text>Payment</Text>
      </TouchableOpacity>

      <Sam title="doo" age="40"/>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})