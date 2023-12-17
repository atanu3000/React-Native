import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type cardProps = {
    imgSrc: string,
    title: string,
    label: string,
    desp: string,
    footer: string,
};

export default function FancyCard(props: cardProps) {
  return (
    <View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: props.imgSrc,
          }}
          style={styles.cardImages}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Text style={styles.cardLabel}>{props.label}</Text>
            <Text style={styles.cardDescription}>{props.desp}</Text>
            <Text style={styles.cardFooter}>{props.footer}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 360,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 12,
    marginHorizontal: 8,
  },
  cardElevated: {
    backgroundColor: '#DDDDDD',
    elevation: 5,
    shadowOffset: {
        width: 1,
        height: 1,
    },
  },
  cardImages: {
    height: 180,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
    flex: 1,
    flexGrow: 1,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    color: '#666',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardDescription: {
    color: '#000000',
    fontSize: 16,
    paddingTop: 12,
  },
  cardFooter: {
    color: '#666',
    paddingTop: 6,
  },
});
