import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons"

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Home from './pages/home'
import Details from "./pages/details";

const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black',
                    paddingBottom: 1,
                    paddingTop: 1,
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: '#f0f',
                tabBarInactiveTintColor: '#555'
            }}

        >
            <Tab.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    tabBarStyle: { display: 'none' },
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    tabBarStyle: { display: 'none' },
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}

                
            />
            
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />
             <Tab.Screen
                name="Details"
                component={Details}
                options={{
                    headerShown:false,
                    tabBarStyle: { display: 'none' },
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }} />


        </Tab.Navigator>
    );
}

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="signin"
                    component={SignIn}
                    options={{ headerShown: true }} />


                <Pilha.Screen
                    name="home"
                    component={Home}
                    options={{ headerShown: true }} />


                <Pilha.Screen
                    name="signup"
                    component={SignUp}
                    options={{ headerShown:true }} />

                <Pilha.Screen
                    name="details"
                    component={Details}
                    options={{ headerShown: true }} />
            </Pilha.Navigator>
            

        </NavigationContainer>

    )

}