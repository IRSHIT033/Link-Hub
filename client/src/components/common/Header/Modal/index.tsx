import React from 'react'
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { COLORS, SHADOWS, SIZES } from '../../../../constants/theme'

interface props {
    isVisible: boolean
    children: JSX.Element | JSX.Element[]
    onClose: any
}

const ModalPopup = ({ isVisible, children, onClose }: props) => {
    return (
        <Modal  animationType="slide" transparent visible={isVisible}>
            <View style={styles.modalContainer}>
                <Pressable onPress={onClose}>
                    <MaterialIcons
                        name="close"
                        color={COLORS.light}
                        style={{ padding: 10 }}
                        size={SIZES.xxLarge}
                    />
                </Pressable>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '60%',
        backgroundColor: COLORS.secondary,
        margin: SIZES.medium,
        borderRadius: 18,
        position: 'absolute',
        left:'15%',
        ...SHADOWS.medium,
        elevation:4
        
    },
})

export default ModalPopup
