import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardType } from './type';
import * as Styles from '../../ui/styles'
import { colors } from '../../theme';
import formatDate from '../../utils/formatDate';

const Content = ({
    data: {
        email,
        name,
        orderId,
        created_at
    },
    TopComp,
    LeftComp,
    RightComp
}: CardType) => {


    var tsx = 'pop';

    return (
        <View style={styles.main}>
            <View style={styles.top}>
                <Text style={styles.txt}>{email ? email : `${orderId.slice(0, 10)}...`}</Text>
                {TopComp}
            </View>
            <View style={styles.primary}>
                <Text style={styles.txt2}>{name ? name : formatDate(created_at)}  </Text>
                <View style={styles.secondary}>
                    {LeftComp}
                    {RightComp}
                </View>
            </View>

        </View>

    )
}

export default Content

const styles = StyleSheet.create({
    main: {
        ...Styles.flex(1, '100%', 'center', 'center', 12, 'column', null, 'noWrap'),
    },
    top: {
        ...Styles.flex(1, '100%', 'space-between', 'center', 0, 'row', null, 'noWrap'),
        borderBottomWidth: 2,
        paddingBottom: 6,
        borderColor: colors.primary,
        paddingHorizontal: 6
    },
    primary: {
        ...Styles.flex(4, '100%', 'center', 'center', 12, 'column', null, 'noWrap'),
    },
    secondary: {
        ...Styles.flex(1, '100%', 'space-between', 'center', 0, 'row', null, 'noWrap'),
        paddingHorizontal: 6
    },
    txt2: {
        ...Styles.text('dark', 'center', 'xl', 'md'),
        paddingVertical: 12
    },
    txt: {
        ...Styles.text('dark', 'center', 'xl', 'md'),

    }
})