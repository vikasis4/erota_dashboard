import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as style from '../ui/styles'
import Button from '../ui/components/Button'
import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { colors } from '../theme'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const HomeBox = (props: { data: any, name: string, route: string, show: boolean, nav: any }) => {
  return (

    props.data.isLoading ?
      <ShimmerPlaceholder
        style={styles.load}
        width={1200}
        shimmerColors={[colors.secondary, colors.primary, colors.secondary]} />
      :
      props.data.isError ?
        <View style={styles.main}>
          <Text style={styles.text}>{props.name}</Text>
          <Text style={[ {paddingTop:12, color:'red', fontSize:18, textAlign:'center'}]}>Error, Something went wrong....</Text>
        </View>
        :
        <View style={styles.main}>
          <Text style={styles.text}>{props.name}</Text>
          <View style={styles.primary}>
            <View style={{ paddingLeft: 20, flex: 1 }}>
              <Text style={styles.textInner}>Total :- {props.data.tl}</Text>
              {props.show && <Text style={[styles.textInner, { color: 'red' }]}>Pending :- {props.data.pl}</Text>}
            </View>
            <Button txt="View" route={props.route} nav={props.nav} />
          </View>
        </View>

  )
}

export default HomeBox

const styles = StyleSheet.create({
  load: {
    height: 160,
    width: '90%',
    borderRadius: 6,
  },
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
    borderBottomColor: 'gray',
    borderBottomWidth: 2
  }
})