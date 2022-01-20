import React from 'react'
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/footer'
import { useFonts } from 'expo-font';

const News = ({navigation}) => {
    const [loaded] = useFonts({
      TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
      TrispaceSemiBold: require('../assets/fonts/Trispace/Trispace-SemiBold.ttf'),
      TrispaceBold: require('../assets/fonts/Trispace/Trispace-Bold.ttf'),
    });
    if (!loaded) {
      return null;
    }
  
    return (
        <ScrollView nestedScrollEnabled={true} style={styles.container}>
        <View>
        <Header/>
        <Text style={styles.bigTitle}>Notícias Gamers</Text>
        <Text style= {styles.title}>Últimas notícias sobre Chroma Squad</Text>
        <Text style= {styles.text}>A importância dada ao mercado de jogos no Brasil não é o ideal e muito menos condizente com a qualidade do conteúdo produzido aqui, por isso nosso objetivo é a divulgação desses jogos que fazem parte do que somos.</Text>
        <Text style= {styles.title}>Sobre os desenvolvedores</Text>
        <Text style= {styles.text}>Somos três alunos do IFAL do curso de Informática para internet. Entre os componentes do time temos, em ordem alfabética: Fernando Leite, José Matheus Santana, Larah Lira. Nosso time inteiro gosta da temática por nós abordada e somos muito interessados no conteúdo brasileiro também.</Text>
        <Text style= {styles.title}>Sobre os desenvolvedores</Text>
        <Text style= {styles.text}>Somos três alunos do IFAL do curso de Informática para internet. Entre os componentes do time temos, em ordem alfabética: Fernando Leite, José Matheus Santana, Larah Lira. Nosso time inteiro gosta da temática por nós abordada e somos muito interessados no conteúdo brasileiro também.</Text>
        <Footer/>
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
  bigTitle:{
    fontFamily: 'TrispaceBold',
    fontSize: 24,
    color: 'white',
    textAlign: "center"
  },
  title:{
    fontFamily: 'TrispaceSemiBold',
    color: 'white',
    textAlign: 'left',
    fontSize:16,
    paddingLeft: 20

  },
  text: {
    fontFamily: 'TrispaceRegular',
    color: 'white',
    textAlign: 'left',
    fontSize: 14,
    padding:20
  },
  });
  export default News