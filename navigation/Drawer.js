import React from 'react';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import GameScreen from '../screens/GameScreen';

const Drawer = () => {
  
    const Drawer = createDrawerNavigator ();

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="HomeScreen" component={HomeScreen} />
                <Drawer.Screen name="AboutScreen" component={AboutScreen} />
                <Drawer.Screen name="GameScreen" component={GameScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Drawer;
