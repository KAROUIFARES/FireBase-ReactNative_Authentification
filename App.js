import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashbord';
const Stack = createStackNavigator();
function MyStack()
{
  return (
    <Stack.Navigator
      initialRouteName="Signup" /**The name of the route to render on first load of the navigator. */
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: 'Signup' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={
          {
            title: 'Login',
            headerLeft: null
          }
        }
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={
          {
            title: 'Dashboard',
            headerLeft: null
          }
        }
      />
    </Stack.Navigator>
  );
}

export default function App()
{
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}