import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import shippingScreen from './src/screens/shippingScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="shipping" component={shippingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;