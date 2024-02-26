import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as style from '../ui/styles'
import Button from '../ui/components/Button'

const HomeBox = (props: { name: string, route: string, show: boolean, nav:any }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.name}</Text>
      <View style={styles.primary}>
        <View style={{paddingLeft:20, flex:1}}>
          {props.show && <Text style={[styles.textInner, { color: 'red' }]}>Pending :- 20</Text>}
          <Text style={styles.textInner}>Total :- 40</Text>
        </View>
        <Button route={props.route} nav={props.nav} />
      </View>
    </View>
  )
}

export default HomeBox

const styles = StyleSheet.create({
  primary: {
    ...style.flex(1, 2, 1, 1, 0, 0)
  },
  main: {
    ...style.flex(1, 1, 1, 1, 0, 2),
    ...style.box('', '90%', 2),
    elevation: 10,
    borderRadius: 6,
    padding: 10
  },
  textInner: {
    ...style.text(2, 'left', 1, 3),
  },
  text: {
    ...style.text(2, 'left', 4, 3),
    width: '100%',
    borderBottomColor:'gray',
    borderBottomWidth:2
  }
})