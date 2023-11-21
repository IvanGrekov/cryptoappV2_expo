import { HamburgerIcon, FavouriteIcon, SearchIcon } from 'native-base';

import { STYLE_VARIABLES } from '../constants/style';

const getTabNavigatorColor = ({ focused, routeName }) => {
    if (!focused) {
        return STYLE_VARIABLES.grayOpacity;
    }

    if (routeName === 'Favorites') {
        return STYLE_VARIABLES.red;
    }

    return STYLE_VARIABLES.bgColor;
};

const getTabNavigatorIcon = ({ routeName, focused, size }) => {
    const iconColor = getTabNavigatorColor({ focused, routeName });

    if (routeName === 'Favorites') {
        return <FavouriteIcon size={size} color={iconColor} />;
    }

    if (routeName === 'Search') {
        return <SearchIcon size={size} color={iconColor} />;
    }

    return <HamburgerIcon size={size} color={iconColor} />;
};

export const getTabNavigatorOptions = ({ route }) => {
    const routeName = route.name;

    return {
        tabBarIcon: (props) =>
            getTabNavigatorIcon({
                ...props,
                routeName,
            }),
        tabBarInactiveTintColor: getTabNavigatorColor({
            routeName,
            focused: false,
        }),
        tabBarActiveTintColor: getTabNavigatorColor({
            routeName,
            focused: true,
        }),
        tabBarStyle: {
            height: 55,
            paddingBottom: 5,
            backgroundColor: STYLE_VARIABLES.black,
            borderTopWidth: 0,
        },
    };
};
