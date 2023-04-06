import React from 'react'
import { StyleSheet, Animated, Text, TouchableOpacity } from 'react-native'
import CopyToClipboard from '../../../assets/svgComponent/CopyToClipboard'
import { styles } from './Link.style'
import * as Clipboard from 'expo-clipboard'

interface Props {
    Fieldname: string
    Fieldurl: string
    Fieldsvg: JSX.Element
}

export default function LinkCard({ Fieldname, Fieldurl, Fieldsvg }: Props) {
    const copyToClipboard = async () => {
        const res = await Clipboard.setStringAsync(Fieldurl)
    }
    return (
        <TouchableOpacity style={styles.container} onPress={copyToClipboard}>
            {Fieldsvg}
            <Text style={styles.linktext}>{Fieldname}</Text>
            <CopyToClipboard />
        </TouchableOpacity>
    )
}
