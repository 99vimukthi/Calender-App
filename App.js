import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Agenda } from 'react-native-calendars';
import React from 'react';
import registerNNPushToken from 'native-notify';

export default function App() {
  //registerNNPushToken(21120, 'xxs4BEH4AyQd5MUV19m1xN');
  //registerNNPushToken(21121, 'rIcM0Md4p8xaNr9sqbJtMo');
  registerNNPushToken(21122, 'STldGbK8hteCMEWG6wz5Hb');
  
  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        items={{
          '2024-05-03': [
            {
              title: 'Meeting 1',
              start_time: '10:00 AM',
              end_time: '11:00 AM',           //event 1
              type: 'meeting'
            }
          ],
          '2024-03-28': [
            {
              title: 'Meeting 2',
              start_time: '2:00 PM',
              end_time: '3:00 PM',          //event 2
              type: 'meeting',
              note:'Meeting 2 Note'
            }
          ],
          '2024-03-29': [
            {
              title: 'Meeting 3',
              start_time: '3:00 PM',       //event 3
              end_time: '4:00 PM',
              type: 'meeting',
              note:'Meeting 3 Note',
            }
            
          ],
          '2024-04-05': [
            {
              title: 'Meeting 4',
              start_time: '3:00 PM',      //event 4
              end_time: '4:00 PM',
              type: 'meeting',
              note:'Meeting 4 Note',
            }
            
          ],
          '2024-04-06': [
            {
              title: 'Meeting 5',
              start_time: '3:00 PM',
              end_time: '4:00 PM',       //event 5
              type: 'meeting',
              note:'Meeting 5 Note',
            }
            
          ],
          // Add public holidays
          '2024-01-01': [
            {
              title: 'New Year',
              type: 'public',
              note: 'Public holiday - New Year'
            }
          ],
          '2024-04-13': [
            {
              title: 'Good Friday',
              type: 'public',
              note: 'Public holiday - Good Friday'
            }
          ],
          // Add bank holidays
          '2024-03-14': [
            {
              title: 'Bank Holiday',
              type: 'bank',
              note: 'Bank holiday - Annual closing'
            }
          ],
          // Add mercantile holidays
          '2024-02-14': [
            {
              title: 'Valentine\'s Day',
              type: 'mercantile',
              note: 'Mercantile holiday - Valentine\'s Day'
            }
          ]
        }}
      
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={[styles.item, 
            item.type === 'public' ? styles.publicHoliday :
            item.type === 'bank' ? styles.bankHoliday :
            item.type === 'mercantile' ? styles.mercantileHoliday : null]}>
            <Text style={styles.itemText}>Title: {item.title}</Text>
            {item.start_time && item.end_time && (
              <Text style={styles.itemText}>Time: {item.start_time} - {item.end_time}</Text>
            )}
            <Text style={styles.itemText}>Note: {item.note}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  item:{
    backgroundColor:'lightblue',
    flex:1,
    padding:10,
    marginRight:10,
    marginTop:25,
    paddingBottom:20
  },
  itemText:{
    color:'black',
    fontSize:16
  },
  publicHoliday: {
    backgroundColor: 'red',
  },
  bankHoliday: {
    backgroundColor: 'green',
  },
  mercantileHoliday: {
    backgroundColor: 'orange',
  }
})
