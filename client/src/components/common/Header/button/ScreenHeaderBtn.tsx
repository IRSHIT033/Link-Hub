import React from 'react'
import {
    Image,
    Pressable,
    GestureResponderEvent,
    ImageURISource,
    ViewStyle,
    ImageStyle,
    TextStyle,
} from 'react-native'
import styles from './ScreenHeaderBtn.style'

interface Props {
    iconUrl: ImageURISource
    dimension: number
    handlePress?: ((event: GestureResponderEvent) => void) | undefined
    ExtraStyling?: ViewStyle | ImageStyle | TextStyle
}

const ScreenHeaderBtn = ({
    iconUrl,
    dimension,
    handlePress,
    ExtraStyling,
}: Props) => {
    return (
        <Pressable style={styles.btnContainer} onPress={handlePress}>
            <Image
                source={iconUrl}
                resizeMode="contain"
                style={[ExtraStyling, styles.btnImg(dimension)]}
            />
        </Pressable>
    )
}

export default ScreenHeaderBtn
