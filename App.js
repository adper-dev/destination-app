// import libraries
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { Text, View } from 'react-native';
// import font
import SuperstarPersonalUse from './src/assets/fonts/SuperstarPersonalUse-zEaG.ttf';
// import component
import DestinationPage from './src/pages/DestinationPage';
import DetailDestinationPage from './src/pages/DetailDestinationPage';
import HomePage from './src/pages/HomePage';

// Variable createStackNavigator()
const Stack = createStackNavigator();

// Stack HomeScreen
const StackHome = () => {
  const [loaded] = useFonts({
    SuperstarPersonalUse,
  })

  if (!loaded) {
    return <Text>Loading...</Text>
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name='ADestinasi' component={HomePage} options={{
        headerTitle: <Text style={{fontFamily: 'SuperstarPersonalUse', fontSize: 30, color: '#0266b8'}}>ADestinasi</Text>,
        headerRight: () => (
          <Ionicons style={{ fontSize: 30, paddingRight: 10 }} name="ios-search" color='#0266b8' />
        ),
      }} />
      <Stack.Screen name='Detail Destinasi' component={DetailDestinationPage} options={{
        headerTintColor: '#0266b8'
      }} />
    </Stack.Navigator>
  );
}

const StackDestination = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Destinasi' component={DestinationPage} options={{
        headerTintColor: '#0266b8'
      }} />
    </Stack.Navigator>
  )
}

function HotelScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hotel!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profil!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Halaman Utama') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Destinasi') {
              iconName = focused ? 'ios-locate' : 'ios-locate';
            } else if (route.name === 'Hotel') {
              iconName = focused ? 'ios-bed' : 'ios-bed';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'ios-contact' : 'ios-contact';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0266b8',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Halaman Utama" component={StackHome} />
        <Tab.Screen name="Destinasi" component={StackDestination} />
        <Tab.Screen name="Hotel" component={HotelScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
