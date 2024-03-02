import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { colors } from '../../../theme'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const Basic = () => {
    return (
        <View style={styles.main}>

            <ShimmerPlaceholder
                style={styles.newLoad}
                shimmerColors={[colors.primary, colors.secondary, colors.primary]} />

            <View style={styles.primary}>
                <View style={styles.secondary}>
                    <ShimmerPlaceholder
                        style={styles.newLoad}
                        shimmerColors={[colors.primary, colors.secondary, colors.primary]} />
                    <ShimmerPlaceholder
                        style={styles.newLoad}
                         shimmerColors={[colors.primary, colors.secondary, colors.primary]} />
                </View>
                <View style={styles.secondary}>
                    <ShimmerPlaceholder
                        style={styles.newLoad}
                         shimmerColors={[colors.primary, colors.secondary, colors.primary]} />
                    <ShimmerPlaceholder
                        style={styles.newLoad}
                         shimmerColors={[colors.primary, colors.secondary, colors.primary]} />
                </View>

            </View>
        </View>
    )
}

export default Basic

const styles = StyleSheet.create({
    secondary: {
        height: '100%',
        width: '50%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    primary: {
        width: '90%',
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        paddingTop:10,
        gap: 10,
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    newLoad: {
        width: "80%",
        borderRadius: 4
    }
})