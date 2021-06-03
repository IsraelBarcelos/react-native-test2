/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {

  

  return ( 
      <View style={styles.body}>
        <Text style={styles.text}>Programing the basics</Text>
        <Text style={styles.niceInstagram}>Start with this nice Instagram</Text>
        <Button title="clique aqui" onPress={() => {
          Linking.openURL("https://instagram.com/mai.will_")
        }}></Button>
      </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 36,
    fontStyle: 'italic',
    margin: 10
  },
  niceInstagram:{
    color: "#fff",
    fontSize: 20,
    marginBottom: 10
  },
});

export default App;
