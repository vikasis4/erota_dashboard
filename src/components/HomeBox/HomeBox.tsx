import React from 'react'
import * as SHIMMER from '../../ui/package/shimmer'
import * as Animation from '../../animations'
import Error from '../../ui/components/Error'
import Content from './Content'
import HomeBoxType from './type'
import { styles } from './Content'

const HomeBox = (props: HomeBoxType) => {

  return (
    <Animation.Basic position={props.position} style={styles.main}>
      {
        props.data.isPending ?
          <SHIMMER.Basic />
          :
          props.data.isError ?
            <Error name={props.name} />
            :
            <Content props={props} />
      }
    </Animation.Basic>
  )
}

export default HomeBox