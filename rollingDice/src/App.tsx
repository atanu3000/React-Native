import React, {PropsWithChildren, useState} from 'react';

import {
  Image,
  ImageSourcePropType,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imgUrl: ImageSourcePropType;
}>;

const Dice = ({imgUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imgUrl} />
    </View>
  );
};

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollTheDice = () => {
    let diceNum = Math.floor(Math.random() * 6);

    diceNum == 0 && (diceNum += 6);

    switch (diceNum) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }

    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <>
      <StatusBar backgroundColor={'#7286d3'} />
      <View style={styles.container}>
        <Text style={styles.headingText}>Rolling The Dice</Text>
        <View style={styles.diceContainer}>
          <Dice imgUrl={diceImage} />
        </View>
        <Pressable onPress={rollTheDice}>
          <Text style={styles.rollDiceBtnText}>Roll Me</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  headingText: {
    position: 'absolute',
    top: 0,
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 25,
    width: '100%',
    backgroundColor: '#7286d3',
    color: '#FFFFFF',
    fontWeight: '500',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
