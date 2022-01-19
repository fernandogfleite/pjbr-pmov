import { View, StyleSheet, Text, Button } from 'react-native';
import React from 'react';

const AboutScreen = ( { navigation } ) => {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Text>AboutScreen</Text>
            <Button onPress={() => navigation.navigate('HomeScreen')} title="HomeScreen"/>
        </View>
      </View>
    );
  };

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  }
});