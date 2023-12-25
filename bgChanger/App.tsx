import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Clipboard from '@react-native-clipboard/clipboard';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#C6545D');
  const [isCopied, setIsCopied] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [copiedBackground, setCopiedBackground] = useState(randomBackground);

  const Card = (color: {colorCode: string}): React.JSX.Element => {
    return (
      <TouchableOpacity
        onPress={() => copyToClipboard(color.colorCode)}
        style={[styles.colorCard, {backgroundColor: color.colorCode}]}>
        <Text style={styles.cardTxt}>{color.colorCode}</Text>
      </TouchableOpacity>
    );
  };

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * hexRange.length)];
    }
    setRandomBackground(color);
    setCopiedBackground(color);
    setIsGenerated(true);
    setIsCopied(false);
  };

  const copyToClipboard = (color: string) => {
    Clipboard.setString(color);
    setCopiedBackground(color);
    setIsCopied(true);
  };

  return (
    <>
      <StatusBar backgroundColor={copiedBackground} />
      <View style={[styles.container]}>
        <View style={[styles.topBar, {backgroundColor: copiedBackground}]}>
          <Text style={styles.headingTxt}>Choose What You Like</Text>
        </View>
        <View style={[styles.body]}>
          <View style={[styles.colorCards]}>
            <Card colorCode={randomBackground + '55'} />
            <Card colorCode={randomBackground + '77'} />
            <Card colorCode={randomBackground + '99'} />
            <Card colorCode={randomBackground + 'bb'} />
            <Card colorCode={randomBackground + 'dd'} />
            <Card colorCode={randomBackground + 'ff'} />
          </View>
          <View style={[styles.actionBtns]}>
            <View style={styles.horizontalBtn}>
              <TouchableOpacity onPress={generateColor}>
                <Text
                  style={[
                    styles.actionBtn1,
                    {backgroundColor: randomBackground + 'aa'},
                  ]}>
                  {isGenerated ? 'Try New' : 'Touch Me'}
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.actionBtn2,
                  {backgroundColor: randomBackground + 'aa'},
                ]}>
                {randomBackground}
              </Text>
            </View>
            <Text
              style={[
                styles.actionBtn1,
                {backgroundColor: copiedBackground},
              ]}>
              {isCopied ? 'Copied!' : 'Fill Free to Copy'}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  topBar: {
    height: '100%',
  },
  headingTxt: {
    fontSize: 40,
    color: '#FFFFFF',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  body: {
    position: 'absolute',
    top: 220,
    bottom: 0,
    zIndex: 1,
    height: '75%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  colorCards: {
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 1,
  },
  colorCard: {
    paddingVertical: 20,
    justifyContent: 'center',
    borderRadius: 30,
    marginVertical: 2,
  },
  cardTxt: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  actionBtns: {
    position: 'absolute',
    bottom: 40,
    flex: 1,
    gap: 10,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
  },
  horizontalBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionBtn1: {
    fontSize: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
    color: '#000000',
    textAlign: 'center',
  },
  actionBtn2: {
    fontSize: 18,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 30,
    // backgroundColor: '#DDDDDD',
    color: '#000000',
  },
});

export default App;
