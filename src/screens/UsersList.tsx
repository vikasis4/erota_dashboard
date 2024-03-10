import { View, InteractionManager } from 'react-native'
import React from 'react'
import GeneralCard from '../components/GeneralCard/GeneralCard'
import { DataType, NavProp } from '../components/GeneralCard/type'
import { FlashList } from "@shopify/flash-list";
import { colors } from '../theme'
import useDelay from '../hooks/useDelay'
import useStore from '../hooks/useStore'

import Blank from '../components/elements/Blank'
import Left from '../components/elements/user/Left'
import Right from '../components/elements/user/Right'
import Pages from '../components/Pages';

const UsersList = (props: NavProp) => {

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
              <Pages length={API.User.tl} action="user" />
            </View>


            <FlashList
              renderItem={({ item, index }: { item: DataType, index: number }) => {
                return <GeneralCard data={item} num={index} TopComp={<Blank />} LeftComp={<Left navTool={props} />} RightComp={<Right navTool={props} />} />;
              }}
              estimatedItemSize={API.User.data.length}
              contentContainerStyle={{ padding: 20, backgroundColor: colors['primary'] }}
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              data={API.User.data}
            />
          </>

      }
    </View>
  )
}

export default UsersList