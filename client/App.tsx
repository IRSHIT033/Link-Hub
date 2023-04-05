import React from 'react';
import {  SafeAreaView, StatusBar, StyleSheet,  View } from 'react-native';
import { COLORS } from './src/constants/theme';
import Main from './src/components/Main';

const App=()=> {
  return (
    <>
    <StatusBar backgroundColor={COLORS.primary} />
    <SafeAreaView style={styles.container}>
    
    <View >
    <Main/> 
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
