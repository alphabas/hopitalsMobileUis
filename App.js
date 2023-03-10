import React from 'react';
import { Text, View } from 'react-native';
import Login from './ecrans/Screens/Login';
import SignUp from './ecrans/Screens/SignUp';
import Welcome from './ecrans/Screens/Welcome';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="welcome"
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="signup" component={SignUp} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
