import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
export default function Contact() {
  return (
    <View style={styles.container}>
      
        <Image
          style={{
            width: 230,
            height: 230,
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 100,
          }}
          source={require('../pic/abd.jpg')}
        />

        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.facebook.com/abdalrahman.abunimer/')
          }>
          <Text style={styles.paragraph}>Abdalrhman Abu Nimer</Text>
        </TouchableOpacity>
        <View
          style={{
            height: 2,
            width: '90%',
            backgroundColor: 'red',
            alignSelf: 'center',
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FCF3CA',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EF7B7B',
  },
  touchableOpacity: {
    color: '#FFC107',
    fontSize: 20,
    paddingTop: 20,
    alignSelf: 'center',
  },
});
