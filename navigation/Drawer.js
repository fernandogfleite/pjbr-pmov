import React from 'react';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = () => {
  
    const Drawer = createDrawerNavigator ();

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="HomeScreen" component={HomeScreen} />
                <Drawer.Screen name="AboutScreen" component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Drawer;
