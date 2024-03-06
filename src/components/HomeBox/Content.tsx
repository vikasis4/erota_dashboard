import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../ui/components/Button'
import * as style from '../../ui/styles'
import HomeBoxType from './type'
import { colors } from '../../theme'

const Content = ({ props }: { props: HomeBoxType }) => {

    return (
        <>
            <Text style={styles.text}>{props.name}</Text>
            <View style={styles.primary}>
                <View>
                    <Text style={styles.textInner}>Total :- {props.data.tl}</Text>
                    {props.position && <Text style={styles.textInner2}>Pending :- {props.data.pl}</Text>}
                </View>
                <Button txt="View" type="medium" fxn={() => props.nav(props.route)} />
            </View>
        </>
    )
}

export default Content

export const styles = StyleSheet.create({
    primary: {
        ...style.flex(1, '100%', 'space-between', 'center', 0, 'row', null, 'noWrap'),
        paddingLeft: 20
    },
    main: {
        ...style.flex(1, '94%', 'center', 'center', 0, 'column', 'secondary', 'noWrap'),
        elevation: 10,
        borderRadius: 6,
        padding: 10
    },
    textInner: {
        ...style.text('dark', 'left', 'xl', 'md'),
    },
    textInner2: {
        ...style.text('danger', 'left', 'xl', 'md'),
    },
    text: {
        ...style.text('dark', 'left', '4xl', 'lg'),
        width: '100%',
        paddingBottom:6,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2
    }
})