import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import TrandingPlaces from './components/TrandingPlaces'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import PersonalInfo from './components/PersonalInfo'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <TrandingPlaces />
      <ContactList />
      <ActionCard />
      <PersonalInfo />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})