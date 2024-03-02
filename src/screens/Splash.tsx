import { Text, View } from 'react-native'
import React from 'react'
import * as style from '../ui/styles'
import * as MSG from '../ui/content'


const Splash = (props: any) => {

  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Home')
    }, 2000)
  }, [])

  return (
    <View style={[style.flex(1, 1, 1, 1, 0, 2), style.box('1', '1', 3)]}>
      <Text style={[style.text(1, 'center', 4, 4)]}>{MSG.SPLASH}</Text>
    </View>
  )
}

export default Splash

