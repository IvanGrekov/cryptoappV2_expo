import { StyleSheet } from 'react-native';

import { VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import IndicatorWrapper from '../indicator-wrapper/IndicatorWrapper';

export default function EmptyStateIndicator({ text = 'No data', children }) {
    return (
        <IndicatorWrapper>
            <VStack space={STYLE_VARIABLES.mdSpacing}>
                <Text style={styles.emptyState}>{text}</Text>

                {children}
            </VStack>
        </IndicatorWrapper>
    );
}

const styles = StyleSheet.create({
    emptyState: {
        color: STYLE_VARIABLES.bgColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
