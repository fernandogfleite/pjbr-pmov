import React from 'react';
import { View, StyleSheet, ScrollView, Pressable} from 'react-native';
import Item from '../components/Item';
import Header from '../components/Header'
import Footer  from '../components/footer';
const List = ( {navigation} ) =>{
  return(
    <ScrollView nestedScrollEnabled={true} style={styles.containerScroll}>
      <View style={styles.container}>
        <Header></Header>
        <View>
          <Pressable onPress={() =>{
            navigation.navigate('C', {
              name: "Logo"
            })
            }
          }>
            <Item navigation={navigation}></Item>
          </Pressable>
          <Item navigation={navigation}></Item>
          <Item navigation={navigation}></Item>
        </View>
        <Footer></Footer>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: '#4B2142',
    flex: 1,
    color: 'white',
  },
  container: {
    marginTop: 10,
  },
  item: {
    backgroundColor: '#85C1E9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  floatButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#1A5276',
    borderRadius: 100,
  }
});
export default List