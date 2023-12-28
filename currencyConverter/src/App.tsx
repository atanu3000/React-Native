import React, {useState} from 'react';

import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {currencyByRupee} from './constant';
import CurrencyBtn from './Components/CurrencyBtn';
import Snackbar from 'react-native-snackbar';

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

  const buttonPressed = (targetValue: Currency, amount: string) => {
    if (!amount) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(amount);
    if (!isNaN(inputAmount )) {
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
    if(amount.trim().length == 0) {
      buttonPressed(selectedCurrency, '0');
    }
    setInputValue(amount);
    buttonPressed(selectedCurrency, amount);
  };

  return (
    <>
      <StatusBar backgroundColor={'#a10006'} />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={[styles.rupee, styles.inputTxt]}>₹</Text>
            <TextInput
              style={styles.inputTxt}
              maxLength={14}
              value={inputValue}
              clearButtonMode="always"
              onChangeText={handleInputChange}
              keyboardType="number-pad"
              placeholder="Enter a value in rupees"></TextInput>
          </View>
          {resultValue && <Text style={styles.resultTxt}>{resultValue}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
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
                  // setIsGenerated(true);
                }}>
                <CurrencyBtn {...item} />
              </Pressable>
            )}
          />
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
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputTxt: {
    color: '#ffffff',
  },
  resultTxt: {
    color: '#ffffff',

    fontSize: 32,
    // color: '#000000',
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
    // flex: 3,
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
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
