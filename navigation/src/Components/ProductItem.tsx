import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type ProductProps = PropsWithChildren<{
  product: Product;
}>;

const {width} = Dimensions.get('window')

const ProductItem = ({product}: ProductProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgUrl}} style={styles.image} />

      <View>
        <Text style={styles.name}>{product.name}</Text>

        <View style={[styles.rowContainer, styles.ratingContainer]}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{product.rating} ★</Text>
          </View>
          <Text style={styles.ratingCount}>
            {product.ratingCount.toLocaleString()}
          </Text>
        </View>

        <View style={[styles.rowContainer, styles.priceContainer]}>
          <Text style={styles.offerPercentage}>
            %{product.offerPercentage}
          </Text>
          <Text style={styles.originalPrice}>
            ₹{product.originalPrice.toLocaleString()}
          </Text>
          <Text style={styles.discountPrice}>
            ₹{product.discountPrice.toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // width: width - 50,
    margin: 8,
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 150,
    resizeMode: 'contain',
    marginRight: 12,
  },
  name: {
    width: width - 100,
    paddingRight: 20,
    marginBottom: 4,
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
  ratingContainer: {
    marginBottom: 8,
  },
  priceContainer: {
    marginBottom: 12,
    gap: 4,
  },
  rating: {
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#008c00',

    marginRight: 4,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  ratingCount: {
    color: '#878787',
  },
  originalPrice: {
    fontSize: 18,
    marginRight: 4,
    fontWeight: '600',

    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 18,
    marginRight: 4,
    fontWeight: '600',

    color: '#000000',
  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4bb550',
  },
});

export default ProductItem;
