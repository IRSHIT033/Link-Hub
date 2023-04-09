import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: COLORS.light,
        borderRadius: SIZES.small,
    },
})
