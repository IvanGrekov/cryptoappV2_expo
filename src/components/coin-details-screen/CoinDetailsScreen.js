import { Text } from 'native-base';

// import { RefreshControl } from 'react-native';

// import { ScrollView } from 'native-base';

// import { useCoinDetails } from '../../hooks/coinDetails.hooks';
// import CoinDetails from '../coin-details/CoinDetails';
// import ErrorIndicator from '../error-indicator/ErrorIndicator';
// import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function CoinDetailsScreen({ route }) {
    // const { symbol, data: initialData } = route.params;

    // const { data, isLoading, isRefreshing, error, refreshCoinDetails } = useCoinDetails({
    //     symbol,
    //     initialData,
    // });

    return (
        <ScreenContainer>
            <Text>CoinDetailsScreen</Text>
            {/* <LoadingIndicator isLoading={isLoading || !data} /> */}

            {/* {!isLoading && <ErrorIndicator error={error} />} */}

            {/* <ScrollView
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={refreshCoinDetails} />
                }
            >
                {!!data && <CoinDetails coin={data} />}
            </ScrollView> */}
        </ScreenContainer>
    );
}
