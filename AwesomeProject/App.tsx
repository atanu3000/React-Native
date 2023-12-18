import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import TrandingPlaces from './components/TrandingPlaces'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <TrandingPlaces />
      <ContactList />
      <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})