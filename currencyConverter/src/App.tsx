import React, {useState} from 'react';

import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {currencyByRupee} from './constant';
import CurrencyBtn from './Components/CurrencyBtn';
import Snackbar from 'react-native-snackbar';
import CurrencyBar from './Components/CurrencyBar';
import Icons from './Components/Icons';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>({
    name: 'DOLLAR',
    value: 0.012271428,
    flag: '🇺🇸',
    symbol: '$',
  });
  const [renderType, setRenderType] = useState('bar-type');

  const buttonPressed = (targetValue: Currency, amount: string) => {
    if (!amount) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(amount);
    if (!isNaN(inputAmount)) {
      const convertedAmount = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedAmount.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
  };

  const handleInputChange = (amount: string) => {
    if (amount.trim().length == 0) {
      buttonPressed(selectedCurrency, '0');
    }
    setInputValue(amount);
    buttonPressed(selectedCurrency, amount);
  };

  return (
    <>
      <StatusBar backgroundColor={'#a10006'} />
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.headingTxt}>Converter</Text>
          <View style={styles.typeContainer}>
            <Pressable onPress={() => setRenderType('box-type')}>
              <View
                style={[
                  styles.renderType,
                  renderType === 'box-type' && styles.typeSelected,
                ]}>
                <Icons name="box" />
              </View>
            </Pressable>
            <Pressable onPress={() => setRenderType('bar-type')}>
              <View
                style={[
                  styles.renderType,
                  renderType === 'bar-type' && styles.typeSelected,
                ]}>
                <Icons name="bar" />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={[styles.rupee, styles.inputTxt]}>₹</Text>
            <TextInput
              style={styles.inputTxt}
              maxLength={10}
              value={inputValue}
              clearButtonMode="always"
              onChangeText={handleInputChange}
              keyboardType="number-pad"
              placeholder="Enter a value in rupees"></TextInput>
          </View>
          {resultValue && renderType === 'box-type' && (
            <Text style={styles.resultTxt}>{resultValue}</Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          {renderType === 'box-type' ? (
            <FlatList
              key={'boxTypeFlatList'}
              numColumns={2}
              data={currencyByRupee}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <Pressable
                  style={[
                    styles.button,
                    targetCurrency === item.name && styles.selected,
                  ]}
                  onPress={() => {
                    buttonPressed(item, inputValue);
                    setSelectedCurrency(item);
                  }}>
                  <CurrencyBtn {...item} />
                </Pressable>
              )}
            />
          ) : (
            <FlatList
              key={'barTypeFlatList'}
              numColumns={1}
              data={currencyByRupee}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <CurrencyBar inputValue={inputValue} {...item} />
              )}
            />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a10006',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%',
  },
  typeContainer: {
    flexDirection: 'row',
    marginTop: 12,
    backgroundColor: '#ffffff55',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    overflow: 'hidden',
  },
  renderType: {
    paddingHorizontal: 10,
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeSelected: {
    backgroundColor: '#ffffff88',
  },
  headingTxt: {
    color: '#f6f6f4',
    fontSize: 24,
    paddingVertical: 10,
    fontWeight: '400',
  },
  topContainer: {
    position: 'absolute',
    top: 48,
    width: '100%',
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputTxt: {
    color: '#f6f6f4',
  },
  resultTxt: {
    color: '#f6f6f4',
    paddingTop: 10,
    fontSize: 32,
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF55',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#ffffff',
    height: '65%',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    flex: 1,
    margin: 6,
    borderRadius: 20,
    backgroundColor: '#fdfde9',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    paddingBottom: 8,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
