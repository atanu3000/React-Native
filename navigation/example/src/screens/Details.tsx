import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const {productId} = route.params;

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Details {productId}</Text>
      <Button 
      title='Go to Home'
      // onPress={() => navigation.navigate('Home')}
      onPress={() => navigation.goBack()} // just one sceen back
      />
      <Button 
      title='Go back to first screen'
      // onPress={() => navigation.pop(1)}
      onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
