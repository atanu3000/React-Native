import React from "react";

import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from "react-native";

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
      <View style={[styles.container, isDarkMode ? styles.whiteMode : styles.darkMode]}>
        <Text style={isDarkMode ? styles.whiteMode : styles.darkMode}>Welcome to React Native!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteMode: {
    color: '#FFF',
    backgroundColor: '#222',
  },
  darkMode: {
    color: '#000',
    backgroundColor: '#FFF',
  },
})

export default App;