import React, { useState } from 'react'
import { View } from 'react-native'
import ScreenHeaderBtn from '../../common/Header/button/ScreenHeaderBtn'
import { styles } from './HeaderContainer.Style'
import LogoutSvg from '../../../assets/svgComponent/LogoutSvg'
import EditSvg from '../../../assets/svgComponent/EditSvg'

const HeaderContainer = () => {
    return (
        <View>
            <View style={styles.container}>
                <ScreenHeaderBtn
                    iconUrl={{ uri: 'https://picsum.photos/40' }}
                    dimension={50}
                />
            </View>
        </View>
    )
}
export default HeaderContainer
