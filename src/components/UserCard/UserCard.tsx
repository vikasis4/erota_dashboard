import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface DataType {
    name: string;
    email: string
}

const UserCard = ({ data }: { data: DataType }) => {
    return (
        <View style={styles.main}>
            <Text style={styles.txt}>{data.name}</Text>
            <Text style={styles.txt}>{data.email}</Text>
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'red',
        height: 100,
        width: '100%'
    },
    txt: {
        fontSize: 24,
        color: 'black'
    }
})