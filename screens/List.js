import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Item from '../components/Item';
import Header from '../components/Header'

import { useFonts } from 'expo-font';
export default function List ( {route, navigation} ){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getGames = async () => {
     try {
      const response = await fetch('https://gamesapibr.herokuapp.com/games/');
      const json = await response.json();
      setData(json.games);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getGames();
  }, []);

  const [loaded] = useFonts({
    TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
    TrispaceSemiBold: require('../assets/fonts/Trispace/Trispace-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return(
      <View style={styles.container}> 
        <Header></Header>
        {isLoading ? <ActivityIndicator/> : (
          <View>
            <FlatList 
              nestedScrollEnabled
              data={data}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (<Item dados={ item } data={ data } navigation={navigation}></Item>)}
            />
          </View>
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B2142',
    flex: 1,
    color: 'white',
  },
  item: {
    backgroundColor: '#85C1E9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});
