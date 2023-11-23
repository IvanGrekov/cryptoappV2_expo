import { getCoinBySymbol as getCoinBySymbolQuery } from '../api/coinList';

export const getCoinAsset = async ({
    symbol,
    setIsLoading,
    setData,
    setError,
    abortController,
}) => {
    try {
        setIsLoading(true);
        const result = await getCoinBySymbolQuery({ symbol, abortController });

        if ('errorMessage' in result) {
            setError(result.errorMessage);
            setData(null);

            return;
        }

        setData(result);
        setError('');
    } catch {
        setError('Something went wrong');
    } finally {
        setIsLoading(false);
    }
};

export const refreshCoinAsset = async ({
    symbol,
    setIsRefreshing,
    setData,
    setError,
    abortController,
}) => {
    try {
        setIsRefreshing(true);
        const result = await getCoinBySymbolQuery({ symbol, abortController });

        if ('errorMessage' in result) {
            setError(result.errorMessage);
            setData(null);

            return;
        }

        setData(result);
        setError('');
    } catch {
        setError('Something went wrong');
    } finally {
        setIsRefreshing(false);
    }
};
