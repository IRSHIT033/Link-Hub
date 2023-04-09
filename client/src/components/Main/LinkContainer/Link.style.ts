import { StyleSheet } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../../../constants/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.small,
        backgroundColor: COLORS.light,
        borderRadius: SIZES.small,
        fontSize: SIZES.xxLarge,
        ...SHADOWS.medium,
        shadowColor: COLORS.dark,
    },
    Animatedcontainer: {
        width: '100%',
        alignItems: 'center',
        padding: SIZES.medium,
        backgroundColor: COLORS.primary,
    },

    linktext: {
        fontSize: SIZES.xLarge,
        color: COLORS.secondary,
        fontWeight: 'bold',
        padding: SIZES.xSmall,
    },
    linkContainer: {
        marginTop: SIZES.medium,
    },
})
