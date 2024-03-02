import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../ui/components/Button'
import * as style from '../../ui/styles'
import HomeBoxType from './type'

const Content = ({ props }: { props: HomeBoxType }) => {
    return (
        <>
            <Text style={styles.text}>{props.name}</Text>
            <View style={styles.primary}>
                <View style={{ paddingLeft: 20, flex: 1 }}>
                    <Text style={styles.textInner}>Total :- {props.data.tl}</Text>
                    {props.position && <Text style={[styles.textInner, { color: 'red' }]}>Pending :- {props.data.pl}</Text>}
                </View>
                <Button txt="View" route={props.route} nav={props.nav} />
            </View>
        </>
    )
}

export default Content

const styles = StyleSheet.create({
    primary: {
        ...style.flex(1, 2, 1, 1, 0, 0)
    },
    main: {
        ...style.flex(1, 1, 1, 1, 0, 2),
        ...style.box('', '90%', 2),
        elevation: 10,
        borderRadius: 6,
        padding: 10
    },
    textInner: {
        ...style.text(2, 'left', 1, 3),
    },
    text: {
        ...style.text(2, 'left', 4, 3),
        width: '100%',
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    }
})