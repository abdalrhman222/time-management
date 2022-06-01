import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,TextInput
} from 'react-native';
import Constants from 'expo-constants';

export default function ScheduleButton({ navigation, route }) {
  const data = route.params;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, textAlign: 'center', color: 'black' }}>
        {data.day}
      </Text>
      <FlatList
        data={[
          {
            button: 'Tests',
            data: [

            ],
          },
          {
            button: 'Assigments',
            data: [
       
            ],
          },
          {
            button: 'Meetings',
            data: [
  
            ],
          },
          {
            button: 'Dates',
            data: [
      
            ],
          },
        ]}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Appointment', {
                    dates: item.data,
                    name : item.button,
                  });
                }}>
                <Text style={styles.text}>{item.button}</Text>

              </TouchableOpacity>

            </View>
          );
        }}
        keyExtractor={(item) => item.id}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF3CA',
    padding: 8,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15,
    padding: 10,
    color: '#919190',
    borderColor: '#EF7B7B',
    borderWidth: 3,
    paddingLeft: 5,
    borderRadius: 5,
  },
});
