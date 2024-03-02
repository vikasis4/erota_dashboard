import { StyleSheet, Text, View } from 'react-native'
import * as style from '../../ui/styles'
import React from 'react'
import * as MSG from '../../ui/content'

interface ErrorType {
    name: string
}

const Error = (props: ErrorType) => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.msg}>
                {MSG.ERROR}
            </Text>
        </View>
    )
}

export default Error

const styles = StyleSheet.create({
    main: {
        height: '100%',
        width: '100%',
    },
    msg: {
        ...style.text('red', 'center', 1, 3),
        paddingTop:30,
        width: '100%',
    },
    text: {
        ...style.text(2, 'left', 4, 3),
        width: '100%',
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    }
})