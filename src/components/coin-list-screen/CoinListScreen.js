import { Text } from 'native-base';

// import { useCoinList } from '../../hooks/coinList.hooks';
// import CoinList from '../coin-list/CoinList';
// import ErrorIndicator from '../error-indicator/ErrorIndicator';
// import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function CoinListScreen() {
    // const { coinList, isLoading, isRefreshing, error, getMoreCoins, refreshCoinList } =
    //     useCoinList();

    return (
        <ScreenContainer>
            <Text>CoinListScreen</Text>
            {/* <LoadingIndicator isLoading={isLoading} /> */}

            {/* {!isLoading && <ErrorIndicator error={error} />} */}

            {/* <CoinList
                coinList={coinList}
                isLoading={isLoading}
                isRefreshing={isRefreshing}
                getMoreCoins={getMoreCoins}
                refreshCoinList={refreshCoinList}
            /> */}
        </ScreenContainer>
    );
}
