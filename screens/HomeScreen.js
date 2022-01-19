import { View, StyleSheet, Text, Button } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
          <Text>HomeScreen</Text>
          <Button onPress={() => navigation.navigate('AboutScreen')} title="AboutScreen"/>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  }
});