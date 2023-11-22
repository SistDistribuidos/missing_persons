import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// screens
import ViewComplaints from '../complaint/infraestructure/ViewComplaints';
import Home from '../home/infraestructure/Home';
import Colors from '../complaint/domain/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuComplaintScreen from '../complaint/infraestructure/MenuComplaintScreen';
import RegisterComplaint from '../complaint/infraestructure/RegisterComplaint';

const HomeStackNavigator = createNativeStackNavigator();
function MyStack(){
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen 
                name="ComplaintScreen"
                component={ViewComplaints}
                options={{
                    headerShown: false
                }} 
            />
            <HomeStackNavigator.Screen 
                name="MenuComplaintScreens"
                component={MenuComplaintScreen}
                options={{
                    headerShown: false
                }} 
            />
            <HomeStackNavigator.Screen 
                name="RegisterComplaint"
                component={RegisterComplaint}
                options={{
                    headerShown: false
                }} 
            />
        </HomeStackNavigator.Navigator>
    )
}


const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Complaints'
            screenOptions={{
                tabBarActiveTintColor: Colors.RED
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'home',
                    tabBarIcon: ({ color, size})=>(
                        <MaterialCommunityIcons name="home" size={30} color="black" />
                    ),
                    tabBarBadge: 10
                }}    
            />
            <Tab.Screen name="Complaints" component={MyStack}
                options={{
                    tabBarLabel: 'Denuncias',
                    tabBarIcon: ({ color, size})=>(
                        <MaterialCommunityIcons name="volume-vibrate" size={30} color={color} />
                    ),
                    headerShown: false
                }}    
            
            />
        </Tab.Navigator>
    )
}
export default function Navigation () {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

// export default Navigation