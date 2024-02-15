import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Splash = (props: any) => {


  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text style={{ color: 'black' }}>Splash</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})