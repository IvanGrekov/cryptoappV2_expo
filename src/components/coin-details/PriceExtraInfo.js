import { StyleSheet } from 'react-native';

import { VStack, HStack, Text, Badge } from 'native-base';

import { STYLE_VARIABLES, THEME } from '../../constants/style';

import Divider from './Divider';
import { roundMarketCap, roundSupply } from './utils/price.utils';

export default function PriceExtraInfo({ marketCap, maxSupply, issuedSupply }) {
    return (
        <HStack justifyContent="space-between">
            <VStack style={styles.infoItemWrapper}>
                <Badge variant="outline" style={styles.priceExtraInfoBadge}>
                    Market Cap
                </Badge>

                <Text style={styles.priceExtraInfo}>{` ${roundMarketCap(marketCap)}`}</Text>
            </VStack>

            <Divider orientation="vertical" />

            {!!maxSupply && (
                <VStack style={styles.infoItemWrapper}>
                    <Badge variant="outline" style={styles.priceExtraInfoBadge}>
                        Max Supply
                    </Badge>

                    <Text style={styles.priceExtraInfo}>{` ${roundSupply(maxSupply)}`}</Text>
                </VStack>
            )}

            <Divider orientation="vertical" />

            {!!maxSupply && !!issuedSupply && (
                <VStack style={styles.infoItemWrapper}>
                    <Badge variant="outline" style={styles.priceExtraInfoBadge}>
                        Issued Supply
                    </Badge>

                    <Text style={styles.priceExtraInfo}>{` ${roundSupply(issuedSupply)}`}</Text>
                </VStack>
            )}
        </HStack>
    );
}

const styles = StyleSheet.create({
    infoItemWrapper: {
        alignItems: 'center',
    },
    priceExtraInfoBadge: {
        marginBottom: STYLE_VARIABLES.mdSpacing,
        borderRadius: STYLE_VARIABLES.xsRadius,
    },
    priceExtraInfo: {
        fontSize: STYLE_VARIABLES.mdFontSize,
        color: THEME.colors.coolGray[600],
    },
});
