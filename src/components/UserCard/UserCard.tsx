import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Styles from '../../ui/styles'
import Button from '../../ui/components/Button';
import { NavProp } from '../../screens/Users';

export interface DataType {
    name: string;
    email: string
}
interface CardType {
    data: DataType;
    num: number;
    nav: NavProp
}

const UserCard = ({ data, num, nav }: CardType) => {

    return (
        <View style={styles.main}>
            <Text style={styles.txtF}>{num}</Text>
            <Text style={styles.txt}>{data.email}</Text>
            <View style={styles.primary}>
                <Text style={styles.txt2}>{data.name}</Text>
                <Button txt="Check Orders" route="" nav={nav} />
            </View>
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    main: {
        ...Styles.flex(1 / 4, '100%', 'center', 'center', 0, 'column', 'secondary', 'noWrap'),
        padding: 10,
        borderRadius: 4,
        elevation: 6,
        position: 'relative'
    },
    primary: {
        ...Styles.flex(1 , '100%', 'center', 'center', 0, 'column', 'secondary', 'noWrap'),
    },
    txtF: {
        ...Styles.text('dark', 'center', 'xl', 'md'),
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 4,
        borderBottomLeftRadius: 6
    },
    txt2: {
        ...Styles.text('dark', 'center', 'xl', 'md'),
        paddingVertical:10,
        
    },
    txt: {
        ...Styles.text('dark', 'center', '2xl', 'md'),
        borderBottomWidth: 2,
        paddingBottom: 4,
        borderColor: 'green',
        width: '90%',
    }
})