import React from 'react'
import { Text, TouchableOpacity, Share} from 'react-native'
import CopyToClipboard from '../../../assets/svgComponent/CopyToClipboard'
import { styles } from './Link.style'
import {
    TapGestureHandler,
    TapGestureHandlerStateChangeEvent,
    State,
} from 'react-native-gesture-handler'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,

} from 'react-native-reanimated'

import * as Clipboard from 'expo-clipboard'
import ShareSvg from '../../../assets/svgComponent/ShareSvg'
import { SIZES } from '../../../constants/theme'


interface Props {
    Fieldname: string
    Fieldurl: string
    Fieldsvg: JSX.Element
}

export default function LinkCard({ Fieldname, Fieldurl, Fieldsvg }: Props) {
    const copyToClipboard = async () => {
        try {
        await Clipboard.setStringAsync(Fieldurl)
    } catch (error) {
        console.error(error);
      }
    }
    const ShareLink= async ()=>{
        try {
           await Share.share({
            title:`${Fieldname} link`,
            message:Fieldurl,
            url:Fieldurl
            
            })
             } catch (error) {
            console.error(error);
          }
    }

    const translateX = useSharedValue(0)

    const handleTapGesture = (event: TapGestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            if (translateX.value === -100) {
                translateX.value = 0
            } else {
                translateX.value = -100
            }
        }
    }

    const AnimationStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(translateX.value),
                },
            ],
        }
    })

    return (
        <TapGestureHandler
            onHandlerStateChange={handleTapGesture}
            numberOfTaps={1}
        >
            <Animated.View style={[styles.Animatedcontainer, AnimationStyle]}>
                <TouchableOpacity
                    style={styles.container}
                    onPress={copyToClipboard}
                >
                    {Fieldsvg}
                    <Text style={styles.linktext}>{Fieldname}</Text>
                    <CopyToClipboard />
                </TouchableOpacity>
                <TouchableOpacity onPress={ShareLink} style={{padding:SIZES.medium}}>
                <ShareSvg/>
                </TouchableOpacity>
            </Animated.View>
        </TapGestureHandler>
    )
}
