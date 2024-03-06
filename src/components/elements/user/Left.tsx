import React from 'react'
import Button from '../../../ui/components/Button'
import { NavProp } from '../../GeneralCard/type'

const Left = ({ navTool }: { navTool: NavProp }) => {

  const handleClick = ()=>{

  }

  return (
    <Button txt="View Orders" type="small" fxn={handleClick} />
  )
}

export default Left