import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TextInput, Button, Text } from 'react-native';
import { useFonts } from 'expo-font';

export default Form = () => {
  const [loaded] = useFonts({
    TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
    TrispaceSemiBold: require('../assets/fonts/Trispace/Trispace-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  /*

  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');

  const addMovieFromService = () => {
    addMovie(title, releaseYear).then(result => {
      navigation.goBack();
    })
      .catch(error => {
        console.log(error);
      });
  }*/

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o título do jogo'
      />
      <Text style={styles.title}>Descrição</Text>
      <TextInput
        style={styles.inputLarge}
        placeholder='Escreva a descrição do jogo'
      />
      <Text style={styles.title}>Capa</Text>
      <TextInput
        style={styles.input}
        placeholder='Deixe aqui o link da imagem de capa'
      />
      <Text style={styles.title}>Plataformas</Text>
      <TextInput
        style={styles.input}
        placeholder='Escreva as plataformas disponíveis'
      />
      <Text style={styles.title}>Requisistos Mínimos</Text>
      <TextInput
        style={styles.inputLarge}
        placeholder='Escreva seus requisitos mínimos no seguinte formato:   "SO; Processador;Memória;Placa de vídeo;DirectX;Armazenamento"'
      />
      <Button color="#30A6B7" title="Adicionar" onPress={() => { }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    color:'black',
    borderColor:'white'
  },
  inputLarge: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: 'white',
    color:'black',
    borderColor:'white',
    height: 100,
    textAlignVertical: 'top'
  },
  title:{
    fontFamily: 'TrispaceSemiBold',
    color: 'white',
    textAlign: 'left',
    fontSize:16,
    paddingLeft: 20
},});