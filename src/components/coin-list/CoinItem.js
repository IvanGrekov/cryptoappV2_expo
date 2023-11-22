import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Pressable, List } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

import CoinItemContent from './CoinItemContent';
import { getPrevPagePath } from './utils/coinItem.utils';

export default function CoinItem({ coin, isFavoriteList, isSearchList, onItemPress }) {
    const navigation = useNavigation();

    const { symbol } = coin;

    const onPress = () => {
        if (!onItemPress) {
            return navigation.navigate('Details', {
                symbol,
                prevPage: getPrevPagePath({ isFavoriteList, isSearchList }),
            });
        }

        onItemPress();
    };

    return (
        <List.Item style={styles.item}>
            <Pressable style={styles.itemButton} onPress={onPress}>
                {({ isHovered, isPressed, isFocused }) => (
                    <CoinItemContent
                        coin={coin}
                        isFavoriteList={isFavoriteList}
                        isHovered={isHovered}
                        isPressed={isPressed}
                        isFocused={isFocused}
                    />
                )}
            </Pressable>
        </List.Item>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        paddingVertical: 0,
        paddingRight: STYLE_VARIABLES.xsPadding,
        paddingLeft: 0,
    },
    itemButton: {
        width: '100%',
    },
});
