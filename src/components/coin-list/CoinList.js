import { StyleSheet, RefreshControl } from 'react-native';

import { FlatList } from 'native-base';

import CoinItem from './CoinItem';
import ListSeparator from './ListSeparator';

export default function CoinList({
    coinList,
    isLoading,
    isRefreshing,
    isFavoriteList,
    getMoreCoins,
    refreshCoinList,
}) {
    const renderItem = ({ item, index }) => {
        return (
            <CoinItem coin={{ ...item, marketCapRank: ++index }} isFavoriteList={isFavoriteList} />
        );
    };

    const createKeyExtractor = (item) => {
        return item.id;
    };

    const onEndReached = () => {
        if (!isLoading) {
            getMoreCoins();
        }
    };

    return (
        <FlatList
            refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={refreshCoinList} />
            }
            style={styles.list}
            data={coinList}
            onEndReachedThreshold={0.5}
            renderItem={renderItem}
            keyExtractor={createKeyExtractor}
            onEndReached={onEndReached}
            ItemSeparatorComponent={ListSeparator}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexGrow: 1,
    },
});
