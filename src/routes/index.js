import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CoinDetailsScreen from '../components/coin-details-screen/CoinDetailsScreen';
import CoinListScreen from '../components/coin-list-screen/CoinListScreen';
import FavoriteListScreen from '../components/favorite-list-screen/FavoriteListScreen';
import SearchScreen from '../components/search-screen/SearchScreen';
import { getStackNavigationOptions, getDetailsScreenOptions } from '../utils/stackNavigator.utils';
import { getTabNavigatorOptions } from '../utils/tabNavigator.utils';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeRoutes({ children }) {
    return (
        <>
            {children}

            <Tab.Navigator initialRouteName="List" screenOptions={getTabNavigatorOptions}>
                <Tab.Screen
                    name="List"
                    component={CoinListScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Tab.Screen
                    name="Favorites"
                    component={FavoriteListScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </>
    );
}

export default function Routes({ homeScreenChildren }) {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={getStackNavigationOptions}>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
                {(props) => <HomeRoutes {...props}>{homeScreenChildren}</HomeRoutes>}
            </Stack.Screen>

            <Stack.Screen
                name="Details"
                component={CoinDetailsScreen}
                options={getDetailsScreenOptions}
            />
        </Stack.Navigator>
    );
}
