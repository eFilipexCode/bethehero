import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents/Incidents.js';
import Details from './pages/Detail/Details.js';

function Routes() {
    return (
        <NavigationContainer>
            
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents}/>
                <AppStack.Screen name="Details" component={Details}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;