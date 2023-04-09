import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import ScreenHeaderBtn from '../../common/Header/ScreenHeaderBtn'
import { styles } from './HeaderContainer.Style'
import LogoutSvg from '../../../assets/svgComponent/LogoutSvg'
import EditSvg from '../../../assets/svgComponent/EditSvg'
import {
    TapGestureHandler,
    TapGestureHandlerStateChangeEvent,
    State,
} from 'react-native-gesture-handler'
import Animated, {
    useAnimatedStyle,
    withSpring,
    useSharedValue,
} from 'react-native-reanimated'

const HeaderContainer = () => {
    const translateX_logout_icon = useSharedValue(0)
    const translateX_edit_icon = useSharedValue(0)
    // const width_whole_container= useSharedValue(0)

    //const width_animate=interpolate()

    const handleTapGesture = (event: TapGestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            if (
                translateX_edit_icon.value === -100 &&
                translateX_logout_icon.value == 100
            ) {
                translateX_edit_icon.value = 0
                translateX_logout_icon.value = 0
            } else {
                translateX_edit_icon.value = -100
                translateX_logout_icon.value = 100
            }
        }
    }

    const Animation_logout = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(translateX_logout_icon.value),
                },
            ],
        }
    })

    const Animation_edit = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(translateX_edit_icon.value),
                },
            ],
        }
    })

    // const Animation_whole_container = useAnimatedStyle(():any => {
    //     return {
    //          width:withTiming(width_whole_container,{duration:250})
    //     }
    // })

    return (
        <View style={styles.container}>
            <Animated.View style={Animation_logout}>
                <LogoutSvg />
            </Animated.View>
            \
            <ScreenHeaderBtn
                iconUrl={{ uri: 'https://picsum.photos/40' }}
                dimension={40}
            />
            <Animated.View style={Animation_edit}>
                <EditSvg />
            </Animated.View>
        </View>
    )
}
export default HeaderContainer
