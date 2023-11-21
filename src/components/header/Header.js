import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, HStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import Logo from '../../components/logo/Logo';

export default function Header() {
    return (
        <Box style={styles.header}>
            <HStack space={4} alignItems="center">
                <Logo size="xs" />
                <Text style={styles.text}>CryptoCoins</Text>
            </HStack>
        </Box>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: STYLE_VARIABLES.mdPadding,
        borderBottomWidth: 1,
        borderBottomColor: STYLE_VARIABLES.blackInvisible,
        backgroundColor: STYLE_VARIABLES.bgColor,
    },
    text: {
        color: STYLE_VARIABLES.black,
        fontSize: STYLE_VARIABLES.xlFontSize,
        lineHeight: STYLE_VARIABLES.xlFontSize,
        fontWeight: 'bold',
    },
});
