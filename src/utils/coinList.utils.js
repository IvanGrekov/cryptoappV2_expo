import {
    getCoinsList as getCoinsListQuery,
    getSymbolList as getSymbolListQuery,
} from '../api/coinList';

export const getCoinList = async ({
    setIsLoading,
    setCoinList,
    setPageNumber,
    setError,
    abortController,
}) => {
    try {
        setIsLoading(true);
        const result = await getCoinsListQuery({ abortController });

        if (Array.isArray(result)) {
            setCoinList(result);
            setPageNumber((prev) => ++prev);
            setError('');
        } else {
            setError(result.errorMessage);
        }
    } catch {
        setError('Something went wrong');
    } finally {
        setIsLoading(false);
    }
};

export const getSymbolList = async ({
    symbols,
    setIsLoading,
    setCoinList,
    setPageNumber,
    setError,
    abortController,
}) => {
    try {
        setIsLoading(true);
        const result = await getSymbolListQuery({ symbols, abortController });

        if (Array.isArray(result)) {
            setCoinList(result);
            setPageNumber((prev) => ++prev);
            setError('');
        } else {
            setError(result.errorMessage);
        }
    } catch {
        setError('Something went wrong');
    } finally {
        setIsLoading(false);
    }
};

export const getMoreCoins = async ({
    pageNumber,
    setIsLoading,
    setCoinList,
    setPageNumber,
    setError,
}) => {
    try {
        setIsLoading(true);
        const result = await getCoinsListQuery({ pageNumber });

        if (Array.isArray(result)) {
            setCoinList((prev) => [...prev, ...result]);
            setPageNumber((prev) => ++prev);
            setError('');
        } else {
            setError(result.errorMessage);
        }
    } catch {
        setError('Something went wrong');
    } finally {
        setIsLoading(false);
    }
};

export const getMoreSymbols = async ({
    symbols,
    setIsLoading,
    setCoinList,
    setPageNumber,
    setError,
}) => {
    try {
        setIsLoading(true);
        const result = await getSymbolListQuery({ symbols });

        if (Array.isArray(result)) {
            setCoinList((prev) => [...prev, ...result]);
            setPageNumber((prev) => ++prev);
            setError('');
        } else {
            setError(result.errorMessage);
        }
    } catch {
        setError('Something went wrong');
    } finally {
        setIsLoading(false);
    }
};

export const refreshCoinList = async ({
    setIsRefreshing,
    setCoinList,
    setPageNumber,
    setError,
    abortController,
}) => {
    try {
        setIsRefreshing(true);
        const result = await getCoinsListQuery({ abortController });

        if (Array.isArray(result)) {
            setCoinList(result);
            setPageNumber(1);
            setError('');
        } else {
            setError(result.errorMessage);
        }
    } catch {
        setError('Something went wrong');
    } finally {
        setIsRefreshing(false);
    }
};

export const refreshSymbolList = async ({
    symbols,
    setIsRefreshing,
    setCoinList,
    setPageNumber,
    setError,
}) => {
    try {
        setIsRefreshing(true);
        const result = await getSymbolListQuery({ symbols });

        if (Array.isArray(result)) {
            setCoinList(result);
            setPageNumber(1);
            setError('');
        } else {
            setError(result.errorMessage);
        }
    } catch {
        setError('Something went wrong');
    } finally {
        setIsRefreshing(false);
    }
};
