import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { COLORS } from '../src/constants/theme'
import Main from '../src/components/Main'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Home = () => {
    return (
        <>
        
            <GestureHandlerRootView style={{ flex: 1 }}>
                <StatusBar backgroundColor={COLORS.primary}  barStyle={'light-content'} />
                <View style={styles.container}>
                        <Main />
                </View> 
            </GestureHandlerRootView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
    },
})

export default Home
