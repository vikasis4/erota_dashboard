import React from 'react'
import Animated,
{
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay,
} from 'react-native-reanimated';
import * as FACTORS from '../config/factors'

interface HomeType {
    children: React.JSX.Element | React.JSX.Element[],
    position: boolean,
    style:{}
}

const Basic = ({ children, position, style }: HomeType) => {

    const translateX = useSharedValue(position ? FACTORS.ANIMATION.START_POS_A : -FACTORS.ANIMATION.START_POS_A);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value
        }],
    }));
    React.useEffect(() => {
        translateX.value = withDelay(FACTORS.ANIMATION.DELAY_A, withTiming(FACTORS.ANIMATION.END_POS_A, { duration: FACTORS.ANIMATION.DURATION_A }));
    }, [])


    return (
        <Animated.View style={[style, animatedStyles]}>
            {children}
        </Animated.View>
    )
}

export default Basic