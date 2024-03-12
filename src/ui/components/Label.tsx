import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Styles from '../styles'

interface lableType {
    label: string;
    text: string;
    arr: any[]
}

const Label = ({ label, text, arr }: lableType) => {

    return (
        <View style={styles.main}>
            <Text style={styles.txt}>{label} :-</Text>
            {
                arr.length > 0 ?
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{marginHorizontal:10}}>
                    {arr.map((element: any, index: number) => {
                        return <Text key={index} style={styles.txt3}>{element.name}/{element.price}</Text>
                    })}
                    </ScrollView>

                    :
                    <Text style={styles.txt2}>{text}</Text>
            }
        </View>
    )
}

export default Label

const styles = StyleSheet.create({
    main: {
        ...Styles.flex(1 / 12, '90%', 'space-between', 'center', 0, 'row', 'secondary', 'noWrap'),
        borderRadius: 6,
        paddingHorizontal: 24,
        elevation: 6
    },
    txt: {
        ...Styles.text('dark', 'left', 'xl', 'md')
    },
    txt2: {
        ...Styles.text('dark', 'left', 'sm', 'sm')
    },
    txt3: {
        ...Styles.text('danger', 'left', 'xs', 'md'),
        paddingHorizontal:4,
    }
})