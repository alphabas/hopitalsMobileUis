import React from 'react';
import { Text, View } from 'react-native';
import Login from './ecrans/Screens/Login';
import SignUp from './ecrans/Screens/SignUp';
import Welcome from './ecrans/Screens/Welcome';
import Routes from './routes';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* <Routes /> */}
            {/* <Welcome /> */}
            {/* <Login /> */}
            <SignUp />
        </View>
    );
};
export default App;
