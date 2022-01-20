import React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GameScreen from '../screens/GameScreen';
import Index from '../screens/index';
import List from '../screens/List';
import News from '../screens/News';
import Register from '../screens/Register';


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
            <Stack.Screen name="C" component={GameScreen}/>
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
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Index">
                <Tab.Screen name="Index" component={IndexStack} />
                <Tab.Screen name="List" component={ListStack} />
                <Tab.Screen name="News" component={NewsStack} />
                <Tab.Screen name="Register" component={RegisterStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Tab;
