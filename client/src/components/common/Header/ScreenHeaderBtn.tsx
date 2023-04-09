import React from 'react'
import {
    TouchableOpacity,
    Image,
    GestureResponderEvent,
    ImageURISource,
} from 'react-native'
import styles from './ScreenHeaderBtn.style'

interface Props {
    iconUrl: ImageURISource
    dimension: number
    handlePress?: ((event: GestureResponderEvent) => void) | undefined
}

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: Props) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
                source={iconUrl}
                resizeMode="contain"
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn
