import { Image, View } from 'react-native'
import React from 'react'
import * as style from '../ui/styles'
import HomeBox from '../components/HomeBox/HomeBox'
import UpImage from '../animations/UpImage'
import useStore from '../hooks/useStore'

const Home = (props: any) => {

  var nav = props.navigation.navigate
  const { API } = useStore()


  return (
    <View style={[style.flex(1, '100%', 'center', 'center', 20, 'column', 'primary', 'noWrap'), { paddingVertical: 120 }]}>
      <HomeBox data={API.Order} name="Orders" route="OrdersList" position={true} nav={nav} />
      <HomeBox data={API.User} name="Users" route="UsersList" position={false} nav={nav} />
      <HomeBox data={API.Query} name="Query" route="QueryList" position={true} nav={nav} />
      <UpImage />
    </View>
  )
}

export default Home