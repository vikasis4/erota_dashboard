import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardType } from './type';
import * as Styles from '../../ui/styles'
import { colors } from '../../theme';

const Content = ({ data: { _id, email, name }, num, TopComp, LeftComp, RightComp }: CardType) => {




    return (
        <View style={styles.main}>
            <View style={styles.top}>
                <Text style={styles.txt}>{email}</Text>
                {TopComp}
            </View>
            <View style={styles.primary}>
                <Text style={styles.txt2}>{name}</Text>
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
    },
    txt: {
        ...Styles.text('dark', 'center', 'xl', 'md'),

    }
})