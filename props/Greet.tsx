import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Rect } from 'react-native-safe-area-context';

interface GreetProps {
  name: string;
  age: number;
}

const Greet: React.FC<GreetProps> = ({name, age}) => {
  return (
    <View style={{padding: 10}}>
      <Text>Good day {name}</Text>
      <Text>I am {age} years old</Text>
    </View>
  )
}

export default Greet

const styles = StyleSheet.create({})