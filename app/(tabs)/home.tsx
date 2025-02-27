import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import DateSelector from '@/components/DateSelector'
import MealCategory from '@/components/MealCategory'
import PopularFood from '@/components/PopularFood'
import Counter from '@/useState/Counter'
import NameInput from '@/useState/NameInput'


const home = () => {
  return (
    <ScrollView>
      <Header />

      <Counter />

      <NameInput />

       {/* <SearchBar />
      <DateSelector />
      <MealCategory />
      <PopularFood />  */}
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({})