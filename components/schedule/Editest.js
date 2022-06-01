import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import Schedule from './schedule';
export default function Editest({ navigation, route }) {
  const data = route.prams;
  const [name, setname] = React.useState('name');
  const [test1, settest1] = React.useState('');
  const [test2, settest2] = React.useState('');
  const [test3, settest3] = React.useState('');
  const [test4, settest4] = React.useState('');
  const [test5, settest5] = React.useState('');

  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  const [text4, onChangeText4] = React.useState('');
  const [text5, onChangeText5] = React.useState('');
  const [text6, onChangeText6] = React.useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#FCF3CA',
        padding: 8,
      }}>
      <TextInput style={styles.input} title="hey1" onChangeText={settest1}/>
      <TextInput style={styles.input} title="hey2" onChangeText={settest2}/>
      <TextInput style={styles.input} title="hey3" onChangeText={settest3}/>
      <TextInput style={styles.input} title="hey4" onChangeText={settest4}/>
      <TextInput style={styles.input} title="hey4" onChangeText={settest5}/>

      
    
      <TouchableOpacity style={styles.paragraph}
        onPress={() => {
          navigation.navigate('Appointment', {
              name:name,
              test1:test1,
              test2:test2,
              test3:test3,
              test4:test4,
              test5:test5,

          });
        }}
        style={{
          borderWidth: 2,
          margin: 8,
          marginTop: 8,
          borderRadius: 5,
          padding: 10,
          paddingLeft: 5,
          marginRight: 210,
          textAlign: 'center',
          alignSelf: 'flex-end',
          justifyContent: 'center',
          paddingRight: 5,
          borderColor: '#EF7B7B',
          backgroundColor: '#EF7B7B',
        }}>
        <Text> Save Changes </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    paddingLeft: 8,
    borderColor: '#EF7B7B',
    color: 'Black',
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'auto',
    alignSelf : 'center',
  },
  
});
