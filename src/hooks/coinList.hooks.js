import { useState, useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';

import { getCoinList, getMoreCoins, refreshCoinList } from '../utils/coinList.utils';

let abortController = new AbortController();

export const useCoinList = () => {
    const isFocused = useIsFocused();

    const [coinList, setCoinList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        if (!isFocused) {
            setCoinList([]);
            setPageNumber(0);
            setError('');

            return;
        }

        getCoinList({
            setIsLoading,
            setCoinList,
            setPageNumber,
            setError,
            abortController,
        });

        return () => {
            abortController.abort();
            abortController = new AbortController();
        };
    }, [isFocused]);

    return {
        coinList,
        isLoading,
        isRefreshing,
        error,
        getMoreCoins: () =>
            getMoreCoins({
                pageNumber,
                setIsLoading,
                setCoinList,
                setPageNumber,
                setError,
            }),
        refreshCoinList: () =>
            refreshCoinList({
                setIsRefreshing,
                setCoinList,
                setPageNumber,
                setError,
            }),
    };
};
