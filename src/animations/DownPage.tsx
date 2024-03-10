import React from 'react'
import Animated,
{
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';

interface StreamProp {
    children: React.JSX.Element | React.JSX.Element[],
    style: {},
}
const DownPage = ({ children, style }: StreamProp) => {

    const translateY = useSharedValue(-300);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{
            translateY: translateY.value
        }],
    }));
    React.useEffect(() => {
        translateY.value = withTiming(0, { duration: 700 });
        return () => {
            translateY.value = 0;
        }
    }, [])


    return (
        <Animated.View
            style={[style, animatedStyles]} >
            {children}
        </Animated.View>
    )
}

export default DownPage