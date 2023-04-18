import React from 'react'
import LinkContainer from './LinkContainer/LinkContainer'

import { COLORS, SIZES } from '../../constants/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderContainer from './Header/HeaderContainer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar, View, StyleSheet } from 'react-native'

const Main = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={COLORS.primary}
                barStyle={'light-content'}
            />
            <View style={styles.container}>
                <SafeAreaView
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        backgroundColor: COLORS.primary,
                    }}
                >
                    <HeaderContainer />

                    <LinkContainer />
                </SafeAreaView>
            </View>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
    },
})

export default Main
