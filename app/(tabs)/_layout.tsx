import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { icons } from '@/content/assets';

export default function TabLayout() {
    return (
        <Tabs initialRouteName='home' screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: 'blue' }} >
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={icons.homeicon} // Adjust the path to your asset
                            style={{ width: 23, height: 28 }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    headerShown: false,
                    title: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={icons.meal}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={icons.profileicon}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
