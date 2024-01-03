import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Icons from './Icons'

type IconName = PropsWithChildren<{
    playerName: string;
    name: string;
    gameTurn: boolean;
}>

const PlayerBox = ({playerName, name, gameTurn}: IconName) => {
  return (
    <View style={[styles.PlayerBox, gameTurn ? styles.selected : null]}>
      <Text style={styles.emoji}>😎</Text>
      <Text style={styles.playerName}>{playerName ? playerName : 'Player'}</Text>
      <Icons name={name}/>
    </View>
  )
}

export default PlayerBox

const styles = StyleSheet.create({
    PlayerBox: {
        flex: 1,
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#28175c',
        borderRadius: 10,
        maxWidth: 160,
        maxHeight: 170,
    },
    selected: {
      borderColor: '#FFFFFF',
      borderWidth: 2,
    },
    emoji: {
      color: '#FFFFFF',
      fontSize: 24,
    },
    playerName: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})