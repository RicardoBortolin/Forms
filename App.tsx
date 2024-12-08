import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShippingScreen from './src/screens/ShippingScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="shipping" component={ShippingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
