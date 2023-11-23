import AddToFavoritesButton from '../components/add-to-favorites-button/AddToFavoritesButton';
import { STYLE_VARIABLES } from '../constants/style';

export const getStackNavigationOptions = () => {
    return {
        headerTintColor: STYLE_VARIABLES.black,
        headerStyle: {
            backgroundColor: STYLE_VARIABLES.bgColor,
        },
        headerShadowVisible: false,
    };
};

export const getDetailsScreenOptions = ({ route }) => {
    const { symbol, prevPage } = route.params;

    return {
        title: symbol,
        headerBackTitle: prevPage,
        headerRight: () => <AddToFavoritesButton symbol={symbol} />,
    };
};
