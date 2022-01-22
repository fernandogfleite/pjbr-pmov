import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Button, Pressable } from 'react-native'
import Header from '../components/Header';
import { useFonts } from 'expo-font';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const GameScreen = ({route, navigation}) => {
    const { dados, data } = route.params;
    const [loaded] = useFonts({
      TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
      TrispaceMedium: require('../assets/fonts/Trispace/Trispace-Medium.ttf'),
    });
    if (!loaded) {
      return null;
    }
  
    return (
        <ScrollView nestedScrollEnabled={true} style={styles.container}>
        <View>
        <Header/>
        <Pressable><MaterialCommunityIcons size={20} style={styles.backbttn}onPress={()=>{navigation.navigate('List')}} name="arrow-left"/></Pressable>
        <Image style={styles.imageCard} source={{uri: dados.image}} />
        <Text style= {styles.bigTitle}>{dados.title}</Text>
        <Text style= {styles.text}>{dados.description}</Text>
        <Text style= {styles.PlataformTitle}>Plataformas</Text>
        <View style={styles.containerFlex}>
            <Image source={require('../assets/xbox_logo.png')}/>
            <Image source={require('../assets/steam-logo.png')}/>
            <Image source={require('../assets/Epic_games_store_logo.png')}/>
            <Image style={styles.img} source={require('../assets/consoles-ps-64.png')}/>


        </View>
        <Text style={styles.PlataformTitle}>Requisitos Mínimos</Text>
        <Text style={styles.text}>SO: Windows 7+ </Text>
        <Text style={styles.text}>Processador: Intel i5+ </Text>
        <Text style={styles.text}>Memória: 2G de RAM </Text>
        <Text style={styles.text}>Placa de vídeo: Nvidia 450 GTS / Radeon HD 5750 ou melhor </Text>
        <Text style={styles.text}>DirectX: Versão 9.0 </Text>
        <Text style={styles.text}>Armazenamento: 3 GB de espaço disponível </Text>
        <Pressable style={styles.bttn} title='Deletar' onPress={() => {
          fetch('https://gamesapibr.herokuapp.com/games/'+ dados.id, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          });
          navigation.navigate('List')
        }}><Text style={styles.text}>Deletar</Text></Pressable>
        </View>
        </ScrollView>

    );
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#4B2142',
      flex: 1,
      color: 'white',
    },
    bttn:{
      borderRadius: 80,
      paddingHorizontal: 80,
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: '#30A6B7',
      marginVertical: 20,
      color: 'white'
    },
    backbttn:{
      padding: 10,
      paddingHorizontal: 30,
      alignSelf: 'flex-start',
      marginTop: 10,
      color: "white",
    },
    bigTitle:{
      fontFamily: 'TrispaceMedium',
      fontSize: 30,
      color: 'white',
      textAlign: "left",
      marginLeft: 24,
      marginTop: 10

    },
    PlataformTitle:{
        fontFamily: 'TrispaceMedium',
        fontSize: 26,
        color: 'white',
        textAlign: "center",
        marginTop: 10,
  
    },
    text: {
      fontFamily: 'TrispaceRegular',
      color: 'white',
      textAlign: 'left',
      fontSize: 16,
      marginLeft: 14,
      padding:10,
      paddingRight: 30,
    },
    imageCard: {
        alignSelf: "center",
        marginTop: 20,
        width: 308,
        height: 176.5,
        borderRadius: 10,
    },
    img:{
      width:100,
      height:100
    },
    containerFlex: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
  });
export default GameScreen;