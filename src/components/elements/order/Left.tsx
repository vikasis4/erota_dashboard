import React from 'react'
import Button from '../../../ui/components/Button'
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Left = ({ navTool, orderId }: { navTool: NativeStackScreenProps<any, any>, orderId: string }) => {

    const handleClick = () => {
        navTool.navigation.navigate('Order', { orderId })
    }

    return (
        <Button txt="View Order" type="small" fxn={handleClick} />
    )
}

export default Left