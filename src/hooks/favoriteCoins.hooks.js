import { useState, useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';

import { getSymbolList, getMoreSymbols, refreshSymbolList } from '../utils/coinList.utils';
import { getFavoriteList, getFavoriteListByPage } from '../utils/favoriteList.utils';

export const useFavoriteCoins = () => {
    const isFocused = useIsFocused();

    const [favoriteList, setFavoriteList] = useState(null);
    const [coinList, setCoinList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        if (!isFocused) {
            setFavoriteList(null);
            setCoinList([]);
            setPageNumber(0);
            setError('');

            return;
        }

        getFavoriteList().then((list) => setFavoriteList(list));
    }, [isFocused]);

    useEffect(() => {
        if (!isFocused) {
            return;
        }

        if (!favoriteList?.length) {
            return;
        }

        getSymbolList({
            symbols: getFavoriteListByPage({
                favoriteList,
            }),
            setIsLoading,
            setCoinList,
            setPageNumber,
            setError,
        });
    }, [isFocused, favoriteList]);

    const getMoreCoins = () => {
        if (!favoriteList?.length) {
            return Promise.resolve();
        }

        const symbols = getFavoriteListByPage({
            favoriteList,
            pageNumber,
        });
        if (!symbols.length) {
            return Promise.resolve();
        }

        return getMoreSymbols({
            symbols,
            setIsLoading,
            setCoinList,
            setPageNumber,
            setError,
        });
    };

    const refreshCoinList = async () => {
        if (!favoriteList?.length) {
            return Promise.resolve();
        }

        try {
            setIsRefreshing(true);

            const upToDateFavoriteList = await getFavoriteList();
            setFavoriteList(upToDateFavoriteList);
            await refreshSymbolList({
                symbols: getFavoriteListByPage({
                    favoriteList: upToDateFavoriteList,
                }),
                setIsRefreshing,
                setCoinList,
                setPageNumber,
                setError,
            });
        } catch {
            setError('Something went wrong');
        } finally {
            setIsRefreshing(false);
        }
    };

    return {
        favoriteList,
        coinList,
        isLoading,
        isRefreshing,
        error,
        getMoreCoins,
        refreshCoinList,
    };
};
