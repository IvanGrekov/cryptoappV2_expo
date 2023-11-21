import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from 'native-base';

import { THEME, STYLE_VARIABLES } from './src/constants/style';
import Header from './src/components/header/Header';
import Routes from './src/routes';

export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider theme={THEME}>
                <View style={styles.container}>
                    <StatusBar style="auto" backgroundColor={STYLE_VARIABLES.bgColor} />

                    <Box style={styles.appWrapper}>
                        <Routes homeScreenChildren={<Header />} />
                    </Box>
                </View>
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
