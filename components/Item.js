import React from 'react'
import { View, StyleSheet, Image, Text, Dimensions, Pressable } from "react-native"
import { useFonts } from 'expo-font';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Item = ({dados, navigation}) => {
    
    const [loaded] = useFonts({
        TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
        TrispaceSemiBold: require('../assets/fonts/Trispace/Trispace-SemiBold.ttf'),
    });
    if (!loaded) {
        return null;
    }

    return (
        <Pressable onPress={() => navigation.navigate('C', {dados: dados})}> 
        <View style={styles.container}>
            <Image style={styles.imageCard} source={{uri: dados.image}}/>
            <View style={styles.desc}>
            <Text style={styles.title}>{dados.title}</Text>
            <Text style={styles.text}>{dados.description}</Text>
            <MaterialCommunityIcons name='trash-can' size={32} color='red' />
            </View>
        </View>
        </Pressable>

    );
}

export default Item;
const SLIDER_WIDTH = Dimensions.get('window').width - 40
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom:20,
        width: SLIDER_WIDTH,
        height: 135,
        left: 20,
        backgroundColor: 'white',
        shadowColor: 'grey',
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 2,
        borderRadius: 5,
        display: 'flex',
        paddingBottom: 35
    },
    title: {
        fontFamily: 'TrispaceSemiBold',
        color: 'black',
        textAlign: 'left',
        fontSize: 16,
        paddingLeft: 9,
        marginTop:6,
        marginBottom:6,

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
