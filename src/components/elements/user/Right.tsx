import React from 'react'
import Button from '../../../ui/components/Button'
import { NavProp } from '../../GeneralCard/type'

const Right = ({ navTool }: { navTool: NavProp }) => {

  const handleClick = ()=>{

  }

  return (
      <Button txt="View Query" type="small" fxn={handleClick} />
  )
}

export default Right