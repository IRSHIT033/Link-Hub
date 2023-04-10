import React from 'react'
import { View, Modal } from 'react-native'
import Animated, { useSharedValue } from 'react-native-reanimated'
import styles from './ModalPopup.style'
interface props {
    visible: boolean
    children: JSX.Element
}

const ModalPopup = ({ visible, children }: props) => {
    const [showModal, setShowModal] = React.useState(visible)

    const scaleValue = useSharedValue(0)
    React.useEffect(() => {
        toggleModal()
    }, [visible])
    const toggleModal = () => {
        if (visible) {
            setShowModal(true)
        } else {
            setTimeout(() => setShowModal(false), 200)
        }
    }
    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackGround}>
                <Animated.View
                    style={[
                        styles.modalContainer,
                        { transform: [{ scale: scaleValue.value }] },
                    ]}
                >
                    {children}
                </Animated.View>
            </View>
        </Modal>
    )
}

export default ModalPopup
