import React from 'react'
import Animated,
{
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay,
} from 'react-native-reanimated';
import * as FACTORS from '../config/factors'
import * as style from '../ui/styles'


interface HomeType {
    children: React.JSX.Element | React.JSX.Element[],
    position: boolean,
}

const STYLE = {
    ...style.flex(1, 1, 1, 1, 0, 2),
    ...style.box('', '90%', 2),
    elevation: 10,
    borderRadius: 6,
    padding: 10
}

const HomeCard = ({ children, position }: HomeType) => {

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
        <Animated.View style={[STYLE, animatedStyles]}>
            {children}
        </Animated.View>
    )
}

export default HomeCard