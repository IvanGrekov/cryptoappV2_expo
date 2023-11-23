import { StyleSheet, RefreshControl } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ScrollView, VStack, Box } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import CoinItem from '../coin-list/CoinItem';
import SearchField from '../search-field/SearchField';

export default function SearchScreenContent({
    data,
    searchValue,
    isRefreshing,
    onChangeSearchValue,
    refreshCoinDetails,
}) {
    const navigation = useNavigation();

    const onItemPress = () => {
        if (!data) {
            return;
        }

        return navigation.navigate('Details', {
            symbol: searchValue,
            prevPage: 'Search',
            data,
        });
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={refreshCoinDetails} />
            }
        >
            <VStack space={STYLE_VARIABLES.xsSpacing}>
                <Box style={styles.fieldWrapper}>
                    <SearchField value={searchValue} onChangeText={onChangeSearchValue} />
                </Box>

                {!!data && <CoinItem coin={data} isSearchList={true} onItemPress={onItemPress} />}
            </VStack>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fieldWrapper: {
        padding: STYLE_VARIABLES.smPadding,
    },
});
