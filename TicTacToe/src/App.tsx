import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icons from './Icons';
import Snackbar from 'react-native-snackbar';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PlayerBox from './PlayerBox';
import SvgLine from './SvgLine';

export default function App(): JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>();
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const reload = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const checkWinner = () => {
    if (          // horizontal checkings
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} is winner 🥳`);
    } else if (   // horizontal checkings
      gameState[3] === gameState[4] &&
      gameState[3] === gameState[5] &&
      gameState[3] !== 'empty'
    ) {
      setGameWinner(`${gameState[3]} is winner 🥳`);
    } else if (   // horizontal checkings
      gameState[6] === gameState[7] &&
      gameState[6] === gameState[8] &&
      gameState[6] !== 'empty'
    ) {
      setGameWinner(`${gameState[6]} is winner 🥳`);
    } else if (
      gameState[0] === gameState[3] &&
      gameState[0] === gameState[6] && 
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} is winner 🥳`);
    } else if (
      gameState[1] === gameState[4] &&
      gameState[1] === gameState[7] &&
      gameState[1] !== `empty`
    ) {
      setGameWinner(`${gameState[1]} is winner 🥳`);
    }else if (
      gameState[2] === gameState[5] &&
      gameState[2] === gameState[8] &&
      gameState[2] !== `empty`
    ) {
      setGameWinner(`${gameState[2]} is winner 🥳`);
    }else if (    // diagonal checkings
    gameState[0] === gameState[4] &&
    gameState[0] === gameState[8] &&
    gameState[0] !== 'empty' 
    ) {
      setGameWinner(`${gameState[0]} is winner 🥳`);
    } else if (   // diagonal checkings
      gameState[2] === gameState[4] &&
      gameState[2] === gameState[6] &&
      gameState[2] !== `empty`
    ) {
      setGameWinner(`${gameState[2]} is winner 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw Game!');
    }
  };

  const onChaneItemClick = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: '#ffffff',
      });
    }

    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: '#AE2C26dd',
        textColor: '#FFFFFF',
      });
    }

    checkWinner();
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#38238d'} />
      <View style={styles.body}>
        {gameWinner ? (
          <View style={[styles.playerInfo, styles.winnerInfo]}>
            <Text style={styles.winnerTxt}>{gameWinner}</Text>
          </View>
        ) : (
          <View
            style={[
              styles.playerInfo,
              isCross ? styles.playerX : styles.playerO,
            ]}>
            <Text style={styles.gameTurnTxt}>
              Player {isCross ? 'X' : 'O'}'s Turn
            </Text>
          </View>
        )}
        <View style={styles.playerBox}>
          <PlayerBox playerName={'Player A'} name="circle" gameTurn={!isCross}/>
          <PlayerBox playerName={'Player B'} name="cross" gameTurn={isCross}/>
        </View>
        {/* Game Grid */}
        <FlatList
          numColumns={3}
          data={gameState}
          style={styles.grid}
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={styles.card}
              onPress={() => onChaneItemClick(index)}>
              <Icons name={item} />
            </Pressable>
          )}
        />
        {/* game action */}
        <Pressable style={[styles.gameBtn, styles.topLeftBottomRight]} onPress={reload}>
          <Text style={styles.gameBtnText}>
            {gameWinner ? 'Start new game' : 'Reload the game'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#38238d',
    height: '100%',
  },
  playerBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingVertical: 20,
  },
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    position: 'relative',
    bottom: 130,
    margin: 12,
    paddingTop: 14,
    backgroundColor: '#6648c4',
    borderRadius: 10,
    paddingLeft: 4,
    height: 0,
  },
  card: {
    height: 90,
    maxWidth: 110,
    width: '33.33%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#332267',
    borderRadius: 10,
  },
  topLeftBottomRight: {
    
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    position: 'relative',
    bottom: 80,
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
