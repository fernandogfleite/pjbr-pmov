
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

const Header = () => {
   const [loaded] = useFonts({
      TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
      TrispaceSemiBold: require('../assets/fonts/Trispace/Trispace-SemiBold.ttf'),
    });
   return(
  <Appbar.Header style = {styles.item}>
     <Appbar.Content/><Text style={styles.title}>JogosBR</Text>
      <Appbar.Action icon="controller-classic"/>
  </Appbar.Header>)
};

const styles = StyleSheet.create ({
   item: {
      backgroundColor : "#4B2142",
      position: 'relative',
      width: '100%',
      borderWidth: 0,
   },
   title:{
      fontFamily: 'TrispaceSemiBold',
      color: 'white',
      fontSize: 20,
      position: 'absolute',
      left: 20,
      top: 13
   }
});
export default Header;