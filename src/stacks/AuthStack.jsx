import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/login/Login';
import Register from '../screens/auth/register/Register';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
        name="Login"
        component={Login}
      />
       <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
        name="Register"
        component={Register}
      />
      {/* <Stack.Screen name='Register' component={Register}/> */}
    </Stack.Navigator>
  );
};

export default AuthStack;