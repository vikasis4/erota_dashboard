import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import { colors } from '../../../theme'
import * as Style from '../../../ui/styles'

const Right = ({ products }: { products: any[] }) => {


    return (
        <View style={styles.main}>
            <Text style={styles.txt1}>Total Products :- {products.length}</Text>
            <FlashList
                renderItem={({ item }: { item: any }) => {
                    return <Text style={styles.txt}>{item.name}</Text>
                }}
                estimatedItemSize={4}
                data={products}
            />
        </View>
    )
}

export default Right

const styles = StyleSheet.create({
    main: {
        backgroundColor: colors['primary'],
        minHeight: 8,
        paddingVertical: 4,
        borderRadius: 4,
        elevation: 4,
        width: '50%'
    },
    txt: {
        ...Style.text('light', 'left', 'sm', 'md'),
        padding:6
    },
    txt1: {
        ...Style.text('light', 'center', 'sm', 'md'),
        paddingBottom:12
    }
})