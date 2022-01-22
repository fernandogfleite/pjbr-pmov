import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import { useFonts } from 'expo-font';

export default Form = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [loaded] = useFonts({
    TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
    TrispaceSemiBold: require('../assets/fonts/Trispace/Trispace-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.bigTitle}>Cadastre um novo jogo</Text>
      <Text style={styles.title}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o título do jogo'
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.title}>Descrição</Text>
      <TextInput
        style={styles.inputLarge}
        placeholder='Escreva a descrição do jogo'
        onChangeText={(text) => setDescription(text)}
      />
      <Text style={styles.title}>Capa</Text>
      <TextInput
        style={styles.input}
        placeholder='Deixe aqui o link da imagem de capa'
        onChangeText={(text) => setImage(text)}
      />
        <Pressable style={styles.bttn} hitSlop={10} onPress={()=>{
          const game = {
            title: title,
            description: description,
            image: image
          }
          fetch('https://gamesapibr.herokuapp.com/games/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
          });
          navigation.navigate('List')
        }}>
      <Text style={styles.text}>Adicionar</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'white'
  },
  inputLarge: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'white',
    height: 100,
    textAlignVertical: 'top'
  },
  title: {
    fontFamily: 'TrispaceSemiBold',
    color: 'white',
    textAlign: 'left',
    fontSize: 16,
    paddingLeft: 20
  },
   bigTitle: {
    fontFamily: 'TrispaceSemiBold',
    fontSize: 24,
    color: 'white',
    textAlign: "center",
    marginBottom: 20,
  },
  bttn:{
    borderRadius: 80,
    padding: 10,
    paddingHorizontal: 100,
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: '#30A6B7',
    marginTop: 10
  },
  text:{
    color: 'white',
    fontFamily: 'TrispaceSemiBold',
    fontSize: 18
  }
});