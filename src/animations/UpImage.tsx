import React from 'react'
import Animated,
{
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay,
} from 'react-native-reanimated';
import * as FACTORS from '../config/factors';

const UpImage = () => {

    const scale = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{
            scale: scale.value
        }],
    }));
    React.useEffect(() => {
        scale.value = withDelay(FACTORS.ANIMATION.DELAY_A, withTiming(1, { duration: 1200 }));
    }, [])


    return (
        <Animated.Image source={require('../../assets/media/background.png')}
            resizeMode="repeat"
            style={[{ flex: 1, zIndex: -1, width: '100%', position: 'absolute', top: 0, right: 0 }, animatedStyles]} />
    )
}

export default UpImage