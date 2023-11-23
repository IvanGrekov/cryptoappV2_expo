import { StyleSheet } from 'react-native';

import { VStack, HStack, Text, Badge } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

import PriceExtraInfo from './PriceExtraInfo';
import { SIDE_PADDING } from './constants';
import { getPriceChangeBadgeColor, roundPrice, roundPriceChange } from './utils/price.utils';

export default function PriceInfo({ price, change24h, ...rest }) {
    const priceChangeColor = getPriceChangeBadgeColor(change24h);

    return (
        <VStack space={STYLE_VARIABLES.mdSpacing} style={styles.container}>
            <HStack style={styles.priceWrapper}>
                <Text style={styles.price}>{`${roundPrice(price)}`}</Text>

                <Badge
                    variant="outline"
                    colorScheme={priceChangeColor}
                    style={styles.priceChangeBadge}
                    _text={{ fontSize: STYLE_VARIABLES.smFontSize }}
                >
                    {`24h: ${roundPriceChange(change24h)}%`}
                </Badge>
            </HStack>

            <PriceExtraInfo {...rest} />
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIDE_PADDING,
    },
    priceWrapper: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    price: {
        fontSize: STYLE_VARIABLES.xxlFontSize,
        lineHeight: STYLE_VARIABLES.xxlFontSize,
    },
    priceChangeBadge: {
        borderRadius: STYLE_VARIABLES.xsRadius,
    },
});
