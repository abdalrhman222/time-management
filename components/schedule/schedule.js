import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';

export default function Schedule({ navigation, route }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { day: 'Saturday' },
          { day: 'Sunday' },
          { day: 'Monday' },
          { day: 'Tuesday' },
          { day: 'Wednesday' },
          { day: 'Thursday' },
          { day: 'Friday' },
        ]}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity onPress={() => {
          navigation.navigate('Schedule',{
            day : item.day,
          });
        }}>
                <Text style={styles.text}>{item.day}</Text>
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
    borderRadius: 5 ,
  },
});
