import React from 'react'
import * as SHIMMER from '../../ui/package/shimmer'
import * as Animation from '../../animations'
import Error from '../../ui/components/Error'
import Content from './Content'
import HomeBoxType from './type'
import useStore from '../../hooks/useStore'

const HomeBox = (props: HomeBoxType) => {

  const style = useStore('style');
  console.log(style?.style);
  

  return (
    <Animation.HomeCard position={props.position}>
      {
        props.data.isPending ?
          <SHIMMER.Basic />
          :
          props.data.isError ?
            <Error name={props.name} />
            :
            <Content props={props} />
      }
    </Animation.HomeCard>
  )
}

export default HomeBox