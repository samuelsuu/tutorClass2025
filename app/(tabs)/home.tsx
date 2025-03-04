import { Alert, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import DateSelector from '@/components/DateSelector'
import MealCategory from '@/components/MealCategory'
import PopularFood from '@/components/PopularFood'
import Counter from '@/useState/Counter'
import NameInput from '@/useState/NameInput'
import Greet from '@/props/Greet'
import ActionButton from '@/props/ActionButton'
import User from '@/maps/User'
import UserList from '@/maps/UserList'
import { Href, router } from 'expo-router'


const home = () => {

  function message() {
    Alert.alert('button pressed')

  }

  return (
    <ScrollView>
      <Header />

      {/* usestate */}

      {/* <Counter />
      <NameInput /> */}

      {/* <SearchBar />
      <DateSelector />
      <MealCategory />
      <PopularFood />  */}


      {/* props */}
      <Greet name='samuel' age={20} />
      <ActionButton title='my button' Press={message} />
      <User />

      <TouchableOpacity onPress={() => router.push('/(others)/todo' as Href)}>
        <Text>My Todo</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({})