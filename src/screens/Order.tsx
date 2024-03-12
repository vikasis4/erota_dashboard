import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetOrder, useUpdateOrder } from '../hooks/useOrders';
import * as Styles from '../ui/styles'
import Label from '../ui/components/Label';

const Order = (props: any) => {

  const { data } = useGetOrder(props.route.params.orderId);

  const fxn = () => { }
  var res = useUpdateOrder('order_21323', 'dkshbxsk');
  console.log(res);
  

  return (
    !Array.isArray(data) &&
    <View style={styles.main}>
      <Label label='Email' text={data.user.email} arr={[]} />
      <Label label='Name' text={data.user.name} arr={[]} />
      <Label label='Price' text={data.order.price} arr={[]} />
      <Label label='OrderId' text={data.order.orderId} arr={[]} />
      <Label label='PaymentId' text={data.order.paymentId} arr={[]} />
      <Label label='Products' arr={data.order.products} text='' />
      <Text onPress={fxn}>Press Meeee</Text>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  main: {
    ...Styles.flex(1, '100%', 'center', 'center', 10, 'column', 'primary', 'noWrap')
  }
})