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


const IndexStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="A" component={Index} />
        </Stack.Navigator>
    );
}

const ListStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="B" component={List} />
            <Stack.Screen name="C" component={GameScreen} />
        </Stack.Navigator>
    );
}

const NewsStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="D" component={News} />
        </Stack.Navigator>
    );
}

const RegisterStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="E" component={Register} />
        </Stack.Navigator>
    );
}


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
                <Tab.Screen name="Index" component={IndexStack} />
                <Tab.Screen name="List" component={ListStack} />
                <Tab.Screen name="News" component={NewsStack} />
                <Tab.Screen name="Register" component={RegisterStack} />
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
