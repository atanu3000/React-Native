import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(url: string) {
    Linking.openURL(url);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript in 24 - ES15
          </Text>
        </View>
          <Image
            source={{
              uri: 'https://miro.medium.com/v2/resize:fit:400/1*abfRREYXcGD2e87aOts_fQ.png',
            }}
            style={styles.cardImage}
          />
        <View style={styles.cardBody}>
          <Text numberOfLines={2} style={styles.bodyText}>
            The latest version of JavaScript in 2024 will be ECMAScript 2024
            (ES15). It is currently under development and is expected to be
            finalized in June 2024.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://medium.com/version-1/es2023-whats-new-plus-a-sneak-peek-into-es2024-b2fe487a6c23',
              )
            }>
            <Text style={styles.socialLink}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  card: {
    marginBottom: 20,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  elevatedCard: {
    backgroundColor: '#A9B388',
    elevation: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  headingContainer: {
    backgroundColor: '#5F6F52',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    minWidth: '100%',
    textAlign: 'center',
    color: 'white',
  },
  cardImage: {
    height: 150,
    width: '100%',
  },
  cardBody: {
    // width: 300,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  bodyText: {
    color: "#000000",
    fontSize: 16,
  },
  cardFooter: {
    width: '100%',
    paddingHorizontal: 10,
  },
  socialLink: {
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#5F6F52',
    color: '#FFFFFF',
    maxWidth: 150,
    marginTop: 20,
    borderRadius: 10,
    shadowOffset: {
        width: 10,
        height: 10,
    },
    elevation: 4,
  },
});
