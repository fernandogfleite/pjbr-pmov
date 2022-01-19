import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Game from '../components/Game';

export default function GameScreen({ navigation }) {


  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getGames = async () => {
    const gamesCol = collection(getFirestore(), 'jogos');
    const gameSnapshot = await getDocs(gamesCol);
    const gameList = gameSnapshot.docs.map(doc => doc);
    
    var games = [];
    gameList.forEach(game => {

      const gameData = game.data();

      games.push({
        id: game.id,
        title: gameData['title'],
        description: gameData['description'],
        image: gameData['image']
      });
    });

    setData(games);
    setLoading(false);
  }

  useEffect(() => {
    getGames();
  });

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Game id={item.id} title={item.title} description={item.description} image={item.image}/>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    }
});