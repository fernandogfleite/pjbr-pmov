import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Header from '../components/Header'

import Form from '../components/Form'
import { useFonts } from 'expo-font';


const Register = ({navigation}) => {
    const [loaded] = useFonts({
        TrispaceRegular: require('../assets/fonts/Trispace/Trispace-Regular.ttf'),
        TrispaceSemiBold: require('../assets/fonts/Trispace/Trispace-SemiBold.ttf'),
    });
    if (!loaded) {
        return null;
    }

    

    return (
        <ScrollView nestedScrollEnabled={true} style={styles.container}>
        <View>
            <Header />
            <Form style={styles.form} navigation={navigation}/>
            
        </View>
        </ScrollView>
    );
}


export default Register;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#4B2142',
      flex: 1,
      color: 'white',
    }
});