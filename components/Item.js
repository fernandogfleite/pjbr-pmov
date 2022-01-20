import React from 'react'
import { View, StyleSheet, Image, Text, Pressable } from "react-native"
import { useFonts } from 'expo-font';

const Item = () => {
    const [loaded] = useFonts({
        TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
        TrispaceSemiBold: require('../assets/fonts/Trispace/Trispace-SemiBold.ttf'),
    });
    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageCard}
                source={{uri: 'https://cdn.akamai.steamstatic.com/steam/apps/363800/capsule_616x353.jpg?t=1447372781'}}
            />
            <View style={styles.desc}>
            <Text style={styles.title}>Chroma Squad</Text>
            <Text style={styles.text}>Chroma Squad é um RPG tático sobre cinco dublês que decidem sair de seus trabalhos e criar o seu próprio estúdio de TV inspirado em Power Rangers! Contrate atores, compre equipamentos e melhorias para o seu estúdio, crie armas e robôs gigantes feitos de papelão e fita crepe.</Text>
            </View>
        </View>

    );
}

export default Item;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom:24,
        width: 320,
        height: 135,
        left: 20,
        backgroundColor: 'white',
        shadowColor: 'grey',
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 2,
        borderRadius: 5,
        display: 'flex',
        paddingBottom: 20
    },
    title: {
        fontFamily: 'TrispaceSemiBold',
        color: 'black',
        textAlign: 'left',
        fontSize: 16,
        paddingLeft: 9,

    },
    text: {
        fontFamily: 'TrispaceRegular',
        color: 'black',
        textAlign: 'left',
        fontSize: 12,
        paddingRight:100,
        paddingLeft:10
    },
    imageCard: {
        marginLeft: 10,
        marginTop: 20,
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    desc: {
        flexDirection: 'column',
        alignContent: 'flex-start'
    }
});
