import React from 'react';
import { Text, View, Image } from 'react-native';

export default function Game({ id, title, description, image }) {
    return(
        <View>
            <View>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Image source={{ uri: image }} style={{ width:100, height: 100 }}/>
            </View>
        </View>
    );
}