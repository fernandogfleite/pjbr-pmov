
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Tab from './Tab';
import GameScreen from '../screens/GameScreen';
import React from 'react';

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



const Stack = () =>{
    const Stack = createStackNavigator()

    return (

        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Initial' component={Tab}/>
                <Stack.Screen name='Gamescreen' component={GameScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stack;