import React from 'react'
import LinkContainer from './LinkContainer/LinkContainer'

import { COLORS, SIZES } from '../../constants/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenHeaderBtn from '../common/Header/ScreenHeaderBtn'
import HeaderContainer from './Header/HeaderContainer'

const Main = () => {
    return (
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
    )
}

export default Main
