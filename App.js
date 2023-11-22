import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from 'native-base';

import { THEME, STYLE_VARIABLES } from './src/constants/style';
import Header from './src/components/header/Header';
import Routes from './src/routes';
import { getIsWeb } from './src/utils/expo.utils';

const isWeb = getIsWeb();

export default function App() {
    const content = (
        <>
            <StatusBar style="auto" backgroundColor={STYLE_VARIABLES.bgColor} />

            <Box style={isWeb ? styles.appWrapper : styles.appMobileWrapper}>
                <Routes homeScreenChildren={<Header />} />
            </Box>
        </>
    );

    return (
        <NavigationContainer>
            <NativeBaseProvider theme={THEME}>
                {isWeb ? <View style={styles.container}>{content}</View> : <>{content}</>}
            </NativeBaseProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appMobileWrapper: {
        flex: 1,
        paddingTop: STYLE_VARIABLES.smPadding,
        backgroundColor: STYLE_VARIABLES.bgColor,
    },
    appWrapper: {
        width: 400,
        height: 750,
        backgroundColor: STYLE_VARIABLES.bgColor,
        borderRadius: 25,
        borderWidth: 7,
        borderColor: STYLE_VARIABLES.black,
        overflow: 'hidden',
    },
});
