import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// native navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

// product components
import ProductItem from '../Components/ProductItem';
import Separator from '../Components/Separator';

//data
import {PRODUCTS_LIST} from '../data/contants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {product: item});
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
