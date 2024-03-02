import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as HOOKS from '../hooks'
import * as Styles from '../ui/styles'
import UserCard from '../components/UserCard/UserCard'
import { DataType } from '../components/UserCard/UserCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface NavProp {
  navigation: NativeStackScreenProps<any,any>
};

const Users = (props: NavProp) => {

  const { data } = HOOKS.useUser();

  for (let index = 0; index < 50; index++) {
    data.push(data[0])
  };

  return (
    <ScrollView style={{height: '100%', width: '100%'}}>
      <View style={styles.main}>
        {
          data.map((user: DataType, index: number) => { return <UserCard key={index} num={index} data={user} nav={props} /> })
        }
      </View>
    </ScrollView>
  )
}

export default Users

const styles = StyleSheet.create({
  main: {
    ...Styles.flex(1, '100%', 'center', 'center', 20, 'column', 'primary', 'noWrap'),
    padding: 20,
  }
})