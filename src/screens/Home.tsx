import { View } from 'react-native'
import React from 'react'
import * as style from '../ui/styles'
import HomeBox from '../components/HomeBox'
import * as HOOKS from '../hooks'


const Home = (props: any) => {

  var nav = props.navigation.navigate

  var users = HOOKS.useUser()
  var orders = HOOKS.useOrders()
  var queries = HOOKS.useQueries()
  var slips = HOOKS.useSlips()



  return (
    <View style={[style.flex(1, 1, 1, 1, 20, 2), style.box('', '', 1), style.padding(20, 0, 20, 0)]}>
      <HomeBox data={users} name="Users" route="Users" show={false} nav={nav} />
      <HomeBox data={orders} name="Orders" route="Orders" show={true} nav={nav} />
      <HomeBox data={slips} name="Pay Slips" route="Pay" show={false} nav={nav} />
      <HomeBox data={queries} name="Query" route="Query" show={true} nav={nav} />
    </View>
  )
}

export default Home