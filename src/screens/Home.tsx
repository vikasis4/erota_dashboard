import { View } from 'react-native'
import React from 'react'
import * as style from '../ui/styles'
import HomeBox from '../components/HomeBox'


const Home = (props: any) => {
  var nav = props.navigation.navigate
  
  return (
    <View style={[style.flex(1, 1, 1, 1, 20, 2), style.box('', '', 1), style.padding(20, 0, 20, 0)]}>
      <HomeBox name="Users" route="Users" show={false} nav={nav} />
      <HomeBox name="Orders" route="Orders" show={true} nav={nav} />
      <HomeBox name="Pay Slips" route="Pay" show={false} nav={nav} />
      <HomeBox name="Query" route="Query" show={true} nav={nav}/>
    </View>
  )
}

export default Home