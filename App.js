import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from 'native-base';

import { THEME, STYLE_VARIABLES } from './src/constants/style';

export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider theme={THEME}>
                <View style={styles.container}>
                    <StatusBar style="auto" backgroundColor={STYLE_VARIABLES.bgColor} />

                    <Box style={styles.appWrapper}>
                        <Text>Hello</Text>
                        {/* <Routes homeScreenChildren={<Header />} /> */}
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
        height: 700,
        backgroundColor: STYLE_VARIABLES.bgColor,
    },
});