import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 5,
      name: 'Atanu Paul',
      status: `I'm a passionate programmer learns daily!`,
      imageUrl: 'https://avatars.githubusercontent.com/u/96945274?v=4',
    },
    {
      uid: 6,
      name: 'Krish C Naik',
      status: 'Data Scientist with ML and Deep Learning experience',
      imageUrl: 'https://avatars.githubusercontent.com/u/20041231?v=4',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.userList}>
        {contacts.map(({uid, name, imageUrl}) => (
          <View key={uid} style={styles.userLogo}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <Text style={{color: '#000'}}>{name.split('').slice(0, 8)}...</Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>
                {status.split('').slice(0, 35)}
                {35 < status.split('').length ? '...' : ''}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 10,
    marginTop: 15,
  },
  container: {
    paddingHorizontal: 16,
  },
  userList: {
    marginVertical: 10,
    marginHorizontal: 6,
  },
  userLogo: {
    marginHorizontal: 10,
    flex: 1,
    gap: 4,
    alignItems: 'center',
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginVertical: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  userName: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  userStatus: {
    fontSize: 14,
  },
});
