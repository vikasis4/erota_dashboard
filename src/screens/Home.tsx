import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontSizes, fonts, space } from '../theme'


const Home = (props:any) => {
  return (
    <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Splash')}>
        <Text style={{ color: 'black' }}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})