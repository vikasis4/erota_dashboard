import React from 'react'
import Button from '../../../ui/components/Button'
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Right = ({ navTool }: { navTool: NativeStackScreenProps<any,any> }) => {

  const handleClick = ()=>{

  }

  return (
      <Button txt="View Query" type="small" fxn={handleClick} />
  )
}

export default Right