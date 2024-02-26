import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screen from '../screens'

const Stack = createNativeStackNavigator();

const AppStackNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }} >
                <Stack.Screen name="Splash" component={Screen.Splash} />
                <Stack.Screen name="Home" component={Screen.Home} />
                <Stack.Screen name="Users" component={Screen.Users} />
                <Stack.Screen name="Orders" component={Screen.Orders} />
                <Stack.Screen name="Pay" component={Screen.Pay} />
                <Stack.Screen name="Query" component={Screen.Query} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStackNavigation