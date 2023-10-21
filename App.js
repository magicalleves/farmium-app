import React from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    // Add other font variations if needed.
  });
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
