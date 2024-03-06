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
                <Stack.Screen name="UsersList" component={Screen.UsersList} />
                <Stack.Screen name="OrdersList" component={Screen.OrdersList} />
                <Stack.Screen name="QueryList" component={Screen.QueryList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStackNavigation