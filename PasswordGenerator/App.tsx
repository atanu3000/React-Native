import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

//Form validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be at least 4 characters')
    .max(16, 'Should not be more than 16 characters')
    .required('Length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');

  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const uppercaseCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseCharacter = 'abcdefghijklmnopqrstuvwxyz';
    const digitCharacter = '0123456789';
    const specialCharacter = '!@#$%^&*()*+-/=?';

    if (uppercase) {
      characterList += uppercaseCharacter;
    }
    if (lowercase) {
      characterList += lowercaseCharacter;
    }
    if (numbers) {
      characterList += digitCharacter;
    }
    if (symbols) {
      characterList += specialCharacter;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      let characterIndex = Math.round(Math.random() * characters.length);
      result += characters[characterIndex];
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});