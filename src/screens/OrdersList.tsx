import { View } from 'react-native'
import React from 'react'
import GeneralCard from '../components/GeneralCard/GeneralCard'
import { DataType } from '../components/GeneralCard/type'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlashList } from "@shopify/flash-list";
import { colors } from '../theme'
import useDelay from '../hooks/useDelay'
import useStore from '../hooks/useStore'

import Blank from '../components/elements/Blank'
import Left from '../components/elements/order/Left'
import Right from '../components/elements/order/Right'
import Pages from '../components/Pages';

const OrdersList = (props: NativeStackScreenProps<any, any>) => {

  const { API } = useStore();
  const isReady = useDelay();



  return (
    <View style={{ backgroundColor: colors['primary'], height: '100%', width: '100%' }}>
      {
        !isReady ?
          null
          :
          <>
            <View style={{ height: 80, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Pages length={API.Order.tl} action="user" />
            </View> 

            <View style={{ flexGrow: 1, flexDirection: 'row' }}>

            <FlashList
              renderItem={({ item, index }: { item: DataType, index: number }) => {
                return <GeneralCard
                data={item}
                  num={index}
                  TopComp={<Blank />}
                  LeftComp={<Left navTool={props} orderId={item.orderId} />}
                  RightComp={<Right products={item.products} />}
                />;
              }}
              estimatedItemSize={API.Order.data.length}
              contentContainerStyle={{ padding: 20, backgroundColor: colors['primary'] }}
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              data={API.Order.data}
              />
              </View>
          </>

      }
    </View>
  )
}

export default OrdersList