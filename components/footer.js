import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import { useFonts } from 'expo-font';


const Footer = () => {
  const [loaded] = useFonts({
    TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
    TrispaceSemiBold: require('../assets/fonts/Trispace/Trispace-SemiBold.ttf'),
  });
    return(
    <View style={styles.footer}>
        <Text style={styles.text}>Desenvolvido por FJL</Text>
    </View>
    );
  }; 
  
  const styles = StyleSheet.create({
    footer: {
      backgroundColor: '#DDCECD',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: 10,
      paddingTop: 15
      
    },
    text:{
      fontFamily: 'TrispaceRegular',
      letterSpacing: 0
    }
  });

  export default Footer;