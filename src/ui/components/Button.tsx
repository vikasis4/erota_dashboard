import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as style from '../../ui/styles'

const Button = (props: { route: string, nav:any, txt:string }) => {


  return (
    <TouchableOpacity onPress={() => props.nav(props.route)} activeOpacity={0.8} style={styles.main}>
      <Text style={style.text(1, 'center', 2, 3)}>{props.txt}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  main: {
    ...style.box('', '', 1),
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    elevation: 4,
    marginRight: 20
  }
})