import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

import { COLORS, SIZES } from '../../../../constants/theme'

const styles = StyleSheet.create<any>({
    btnContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: SIZES.small / 1.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnImg: (dimension: number): ImageStyle => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
    }),
})

export default styles
