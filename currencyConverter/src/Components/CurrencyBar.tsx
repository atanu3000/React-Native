import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import Snackbar from 'react-native-snackbar';

type CurrencyBarProps = PropsWithChildren<{
  name: string;
  flag: string;
  value: number;
  symbol: string;
  inputValue: string;
}>;

export default function CurrencyBar(props: CurrencyBarProps): JSX.Element {
  const [resultValue, setResultValue] = useState<string >('0.00');

  const converter = ():string => {
    if (!props.inputValue) {
      Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
      return '0.00';
    } else {
      const inputAmount = parseFloat(props.inputValue);
      if (!isNaN(inputAmount)) {
        const convertedAmount = inputAmount * props.value;
        const result = `${props.symbol} ${convertedAmount.toFixed(2)}`;
        setResultValue(result);
        return result;
      } else {
        Snackbar.show({
          text: 'Not a valid number to convert',
          backgroundColor: '#F4BE2C',
          textColor: '#000000',
        });
        return '0.00';
      }
    }
  };

  useEffect(() => {
    const convertedResult = converter();
    setResultValue(convertedResult);
  }, [props.inputValue, props.value]); // Only re-run the effect if inputValue or value changes

  return (
    <View style={styles.barContainer}>
      <View style={styles.flagBox}>
        <Text style={styles.flag}>{props.flag}</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.rupee}>INR</Text>
          <Text style={styles.rupee}>{props.name}</Text>
        </View>
        <Text style={styles.result}>{resultValue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginVertical: 14,
  },
  flagBox: {
    position: 'relative',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  flag: {
    position: 'absolute',
    bottom: -13,
    left: -13,
    right: -13,
    // top: -13,
    fontSize: 44,
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 14,
    // paddingVertical: 10,
  },
  rupee: {
    fontWeight: '400',
    color: '#000',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
