import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as HOOKS from '../hooks'
import UserCard from '../components/UserCard/UserCard'
import { DataType } from '../components/UserCard/UserCard'

const Users = () => {

  const { data } = HOOKS.useUser();


  return (
    <View>
      {
        data.map((user: DataType, index: number) => { return <UserCard key={index} data={user} /> })
      }
    </View>
  )
}

export default Users

const styles = StyleSheet.create({})