import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface samProps {
    title: String;
    age: String;
}
const Sam: React.FC<samProps> = ({title, age}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{age}</Text>
    </View>
  )
}

export default Sam

const styles = StyleSheet.create({})