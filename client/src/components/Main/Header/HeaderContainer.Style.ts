import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.small,
        backgroundColor: COLORS.light,
        borderRadius: SIZES.small,
        margin: SIZES.small,
    },
    profiletext: {
        fontSize: SIZES.medium,
        color: COLORS.light,
        paddingVertical: SIZES.medium,
    },
    profiletoolContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingVertical: SIZES.large,
    },
})
