import React from 'react'
import Button from '../../../ui/components/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

const Left = ({ navTool }: { navTool: NativeStackScreenProps<any,any> }) => {

  const handleClick = ()=>{

  }

  return (
    <Button txt="View Orders" type="small" fxn={handleClick} />
  )
}

export default Left