import React from 'react'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay,
    ReduceMotion,
    Easing,
} from 'react-native-reanimated';

interface StreamProp {
    children: React.JSX.Element | React.JSX.Element[],
    num: number
    style: {},
}

const UpStream = ({ children, style, num }: StreamProp) => {

    const translate = useSharedValue(1000);
    const scale = useSharedValue(0);
    const delay = num * 140

    const AnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translate.value }, { scale: scale.value }],
    }))
    React.useEffect(() => {
        translate.value = withDelay(delay, withTiming(0, {
            duration: 700,
            easing: Easing.inOut(Easing.quad),
            reduceMotion: ReduceMotion.System,
        }))
        scale.value = withDelay(delay, withTiming(1, {
            duration: 700,
            easing: Easing.inOut(Easing.quad),
            reduceMotion: ReduceMotion.System,
        })
        )

        return () => {
            translate.value = 0;
            scale.value = 1;
        }
    }, [])

    return (
        <Animated.View style={[style, AnimatedStyle]} >
            {children}
        </Animated.View>
    )
}

export default UpStream