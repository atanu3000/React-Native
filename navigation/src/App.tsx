//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Home from './screen/Home';
import Details from './screen/Details';

export type RootStackParamList = {
    Home: undefined,
    Details: {product: Product}
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name="Home"
            component={Home}
            options={{
                title: "Trending Products",
            }}
            />
            <Stack.Screen 
            name="Details"
            component={Details}
            options={{
                title: "Products Details",
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
