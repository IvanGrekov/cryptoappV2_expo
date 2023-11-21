import AsyncStorage from '@react-native-async-storage/async-storage';

import { COINS_PER_PAGE } from '../api/coinList/constants';
import { FAVORITE_LIST_STORAGE_KEY } from '../constants/favoriteList';

export const getFavoriteList = async () => {
    try {
        const value = await AsyncStorage.getItem(FAVORITE_LIST_STORAGE_KEY);

        return value ? JSON.parse(value) : [];
    } catch (e) {
        console.warn(e);

        return [];
    }
};

export const addToFavoriteList = async (symbol) => {
    const favoriteList = await getFavoriteList();

    if (favoriteList.includes(symbol)) {
        return;
    }

    try {
        favoriteList.push(symbol);

        await AsyncStorage.setItem(FAVORITE_LIST_STORAGE_KEY, JSON.stringify(favoriteList));
    } catch (e) {
        console.warn(e);
    }
};

export const removeFromFavoriteList = async (symbol) => {
    const favoriteList = await getFavoriteList();

    if (!favoriteList.includes(symbol)) {
        return;
    }

    try {
        const newList = favoriteList.filter((item) => item !== symbol);

        await AsyncStorage.setItem(FAVORITE_LIST_STORAGE_KEY, JSON.stringify(newList));
    } catch (e) {
        console.warn(e);
    }
};

export const getFavoriteListByPage = ({ favoriteList, pageNumber = 0 }) => {
    const startIndex = pageNumber * COINS_PER_PAGE;
    const endIndex = startIndex + COINS_PER_PAGE;

    return favoriteList.slice(startIndex, endIndex);
};
