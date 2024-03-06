import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Styles from '../ui/styles'
import DownPage from '../animations/DownPage'
import { colors } from '../theme'
import useStore from '../hooks/useStore'

const Pages = ({ length, action,  }: { length: number, action: string,}) => {

    var array = [];
    for (let index = 0; index < Math.ceil(length / 20); index++) {
        array.push('');
    };

    return (
        <DownPage style={styles.main}>
            <ScrollView style={{ flex: 1, marginHorizontal: 20 }} horizontal={true} >
                <View style={styles.seal}>
                    {
                        array.map((item, index) => { return <Number key={index} num={index} action={action} /> })
                    }
                </View>
            </ScrollView>
        </DownPage>
    )
}

const Number = ({ num, action }: { num: number, action: string }) => {
    const { GEN } = useStore();
    var newGen = action as keyof typeof GEN.pageNumber;
    var selected = GEN.pageNumber[newGen] == num + 1 ? true : false;
    const handleClick = () => {
        GEN.setPageNumber({
            ...GEN.pageNumber,
            [action]: num + 1
        })
    }
    return (
        <Text onPress={handleClick} style={selected ? styles.SLtxt : styles.txt}>{num + 1}</Text>
    )
}

export default Pages

const styles = StyleSheet.create({
    seal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    main: {
        ...Styles.flex(1, '90%', 'center', 'center', 0, 'column', 'secondary', 'noWrap'),
        elevation: 6,
        borderRadius: 50,
        marginVertical: 10,
    },
    txt: {
        ...Styles.text('dark', 'left', '4xl', 'md'),
    },
    SLtxt: {
        ...Styles.text('light', 'left', '4xl', 'md'),
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 2
    }
})