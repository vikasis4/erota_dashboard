import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import * as Styles from '../../ui/styles'
import * as Animation from '../../animations'
import Content from './Content';
import { CardType } from './type';

const GeneralCard = ({ data, num, TopComp, LeftComp, RightComp }: CardType) => {

    return (
        <Animation.UpStream num={num} style={styles.main}>
            <Content data={data} num={num} TopComp={TopComp} LeftComp={LeftComp} RightComp={RightComp} />
        </Animation.UpStream>
    )
}

export default memo(GeneralCard)

const styles = StyleSheet.create({
    main: {
        ...Styles.flex(1, '100%', 'center', 'center', 0, 'column', 'secondary', 'noWrap'),
        padding: 10,
        borderRadius: 4,
        elevation: 6,
        position: 'relative',
    },
})