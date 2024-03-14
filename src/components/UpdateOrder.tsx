import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { memo } from 'react'
import * as Styles from '../ui/styles'
import Button from '../ui/components/Button';


const UpdateOrder = ({ orderId, url, shipmentCreated, updateFxn, auth }: any) => {

  const [text, setText] = React.useState<string>(shipmentCreated ? url : 'Shipment Not Created Yet');
  const onChangeText = (data: string) => { setText(data) };
  const updateLink = () => {
    var data = { orderId, url: text }
    updateFxn(data)
  }

  return (
    <View style={styles.main}>
      {
        auth.isPending ?
          <Text style={styles.txt}>Loading</Text>
          :
          auth.isError || auth.isServerError ?
            <Text style={styles.txt}>Error !! Something went Wrong</Text>
            :
            <TextInput
              onChangeText={onChangeText}
              value={text}
              style={styles.txt}
            />}
      <Button txt="Update Shipment" fxn={updateLink} type="medium" />
    </View>
  )
}

export default memo(UpdateOrder)

const styles = StyleSheet.create({
  main: {
    ...Styles.flex(1 / 4, '90%', 'center', 'center', 10, 'column', 'secondary', 'noWrap'),
    borderRadius: 6
  },
  txt: {
    ...Styles.text('dark', 'left', 'xs', 'lg'),
  }
})