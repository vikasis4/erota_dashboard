import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as style from '../../ui/styles'
import { colors } from '../../theme'

const Button = (props: { route: string, nav: any, txt: string }) => {


  return (
    <TouchableOpacity onPress={() => props.nav(props.route)} activeOpacity={0.8} style={styles.main}>
      <Text style={style.text('light', 'center', '2xl', 'md')}>{props.txt}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    elevation: 4,
    marginRight: 20
  }
})