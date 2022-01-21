import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Item from '../components/Item';
import Header from '../components/Header'

import { useFonts } from 'expo-font';
export default function List ( {navigation} ){
  const [loaded] = useFonts({
    TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
    TrispaceSemiBold: require('../assets/fonts/Trispace/Trispace-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  const data = []

  return(
      <View style={styles.container}> 
        <Header></Header>
        <View>
          <FlatList 
            nestedScrollEnabled
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (<Item dados={item} navigation={navigation}></Item>)}
          />
        </View>
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
