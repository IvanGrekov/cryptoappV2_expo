import { useState, useEffect } from 'react';

import { getCoinAsset, refreshCoinAsset } from '../utils/coinAsset.utils';

let abortController = new AbortController();

export const useCoinDetails = ({ symbol, initialData = null }) => {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!symbol) {
            return;
        }

        getCoinAsset({
            symbol,
            setIsLoading,
            setData,
            setError,
            abortController,
        });

        return () => {
            abortController.abort();
            abortController = new AbortController();
        };
    }, [symbol]);

    return {
        data,
        isLoading,
        isRefreshing,
        error,
        refreshCoinDetails: () => {
            refreshCoinAsset({
                symbol,
                setIsRefreshing,
                setData,
                setError,
                abortController,
            });
        },
    };
};
