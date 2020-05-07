import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

function StackApp(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerLayoutPreset: "center",
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: "#333333",
                },
                headerTintColor: "#FFF"
            }}>
                <Stack.Screen name="Inicio" component={Main} />
                <Stack.Screen name="Usuários" component={User} />
                <Stack.Screen name="Repositório" component={Repository} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackApp;

