import React from 'react';
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import GameScreen from '../screens/GameScreen';
import Index from '../screens/index';
import List from '../screens/List';
import News from '../screens/News';
import Register from '../screens/Register';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import data from '../data/data';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(75, 33, 66)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(75, 33, 66)',
        border: 'rgb(3, 59, 150)'
    },
};




const Tab = () => {

    const Tab = createBottomTabNavigator();

    return (

        <NavigationContainer theme={MyTheme}>

            <Tab.Navigator initialRouteName="Index" screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;

                    if (route.name === 'Index') {
                        iconName = 'home'
                    } else if (route.name === 'List') {
                        iconName = 'format-list-bulleted'
                    } else if (route.name === 'News') {
                        iconName = 'newspaper'
                    } else if (route.name === 'Register') {
                        iconName = 'playlist-plus'
                    }

                    
                    return <MaterialCommunityIcons name={iconName} size={32} color={color} />;
                }, tabBarActiveTintColor: 'rgb(75, 33, 66)',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })} >
                <Tab.Screen name="Index" component={Index} />
                <Tab.Screen name="List" component={List} initialParams={{ data: data }} />
                <Tab.Screen name="News" component={News} />
                <Tab.Screen name="Register" component={Register} />
            </Tab.Navigator>

        </NavigationContainer>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4B2142',
        color: 'white',
    }
});

export default Tab;
