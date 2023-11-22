import { BASE_URL, BASE_DATA_URL, END_POINTS, CURRENCY, COINS_PER_PAGE } from './constants';
import { formatCoinList, formatSymbolList, formatSymbolAsset } from './utils';

import { COIN_LIST_API_KEY } from './constants';

export const getCoinsList = ({ pageNumber = 0, abortController }) => {
    const URL = `${BASE_URL}${END_POINTS.getCryptoList}`;
    const PAGINATION_PARAMS = `limit=${COINS_PER_PAGE}&page=${pageNumber}`;

    return fetch(`${URL}?tsym=${CURRENCY}&${PAGINATION_PARAMS}`, {
        signal: abortController?.signal,
        headers: {
            Authorization: `Apikey ${COIN_LIST_API_KEY}`,
        },
    })
        .then(async (response) => {
            const parsedResponse = await response.json();

            if (parsedResponse.Message === 'Success') {
                return formatCoinList(parsedResponse.Data);
            }

            return {
                errorMessage: 'Something went wrong',
            };
        })
        .catch((e) => {
            console.error(e);

            return {
                errorMessage: 'Something went wrong',
            };
        });
};

export const getSymbolList = ({ symbols, abortController }) => {
    const URL = `${BASE_URL}${END_POINTS.getMultiSymbols}`;
    const SYMBOLS_PARAM = `fsyms=${symbols.join(',')}`;

    return fetch(`${URL}?tsyms=${CURRENCY}&${SYMBOLS_PARAM}`, {
        signal: abortController?.signal,
        headers: {
            Authorization: `Apikey ${COIN_LIST_API_KEY}`,
        },
    })
        .then(async (response) => {
            if (response.status !== 200) {
                return {
                    errorMessage: 'Something went wrong',
                };
            }

            const parsedResponse = await response.json();

            return formatSymbolList(parsedResponse);
        })
        .catch((e) => {
            console.error(e);

            return {
                errorMessage: 'Something went wrong',
            };
        });
};

export const getCoinBySymbol = ({ symbol, abortController }) => {
    const URL = `${BASE_DATA_URL}${END_POINTS.getCoinBySymbol}`;

    return fetch(`${URL}?asset_symbol=${symbol}`, {
        signal: abortController?.signal,
        headers: {
            Authorization: `Apikey ${COIN_LIST_API_KEY}`,
        },
    })
        .then(async (response) => {
            const parsedResponse = await response.json();

            if ('message' in parsedResponse.Err) {
                return {
                    errorMessage: 'Coin not found. Correct the name',
                };
            }

            if (!parsedResponse.Data.PRICE_USD) {
                return {
                    errorMessage: 'Coin not found. Correct the name',
                };
            }

            return formatSymbolAsset(parsedResponse);
        })
        .catch((e) => {
            console.error(e);

            return {
                errorMessage: 'Something went wrong',
            };
        });
};
