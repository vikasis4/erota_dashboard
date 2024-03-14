import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetOrder, useUpdateOrder } from '../hooks/useOrders';
import * as Styles from '../ui/styles'
import Label from '../ui/components/Label';
import UpdateOrder from '../components/UpdateOrder';

const Order = (props: any) => {

  const { data } = useGetOrder(props.route.params.orderId);
  var { isPending, isError, isServerError, mutate } = useUpdateOrder();


  return (
    !Array.isArray(data) &&
    <View style={styles.main}>
      <Label label='Name' text={data.user.name} arr={[]} />
      <Label label='Email' text={data.user.email} arr={[]} />
      <Label label='Price' text={data.order.price} arr={[]} />
      <Label label='Products' arr={data.order.products} text='' />
      <Label label='OrderId' text={data.order.orderId} arr={[]} />
      <Label label='PaymentId' text={data.order.paymentId} arr={[]} />
      <UpdateOrder orderId={data.order.orderId} url={data.order.trackingLink} shipmentCreated={data.order.shipmentCreated} updateFxn={mutate} auth={{ isPending, isError, isServerError }} />
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  main: {
    ...Styles.flex(1, '100%', 'center', 'center', 10, 'column', 'primary', 'noWrap')
  }
})