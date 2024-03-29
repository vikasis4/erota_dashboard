import { ImageBackground, Text } from 'react-native'
import React from 'react'
import * as style from '../ui/styles'
import * as MSG from '../ui/content'
  ;


const Splash = (props: any) => {

  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Home')
    }, 2000)
  }, [])

  return (
      <ImageBackground
        source={require('../../assets/media/background.png')}
        resizeMode="repeat"
        style={style.flex(1, '100%', 'center', 'center', 0, 'column', 'primary', 'noWrap')}>

        <Text style={[style.text('light', 'center', '6xl', 'lg')]}>{MSG.SPLASH}</Text>

      </ImageBackground>
  )
}

export default Splash

