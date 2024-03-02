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
    <View style={[style.flex(1, '100%', 'center', 'center', 0, 'column', 'dark', 'noWrap')]}>
      <Text style={[style.text('light', 'center', '6xl', 'lg')]}>{MSG.SPLASH}</Text>
    </View>
  )
}

export default Splash

