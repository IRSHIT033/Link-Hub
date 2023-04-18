import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ScreenHeaderBtn from '../../common/Header/button/ScreenHeaderBtn'
import { styles } from './HeaderContainer.Style'
import LogoutSvg from '../../../assets/svgComponent/LogoutSvg'
import EditSvg from '../../../assets/svgComponent/EditSvg'
import ModalPopup from '../../common/Header/Modal'
import { useStateContext } from '../../../context/AuthContext'
import { FirebaseContextType } from '../../../../@types/CustomTypes'

const HeaderContainer = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const {user}=useStateContext() as FirebaseContextType

      
    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    return (
        <>
            <View style={[styles.headerContainer]}>
                <ScreenHeaderBtn
                    iconUrl={{ uri: 'https://picsum.photos/40' }}
                    dimension={50}
                    handlePress={openModal}
                />
                <ModalPopup isVisible={visible} onClose={closeModal}>
                    <View style={{ alignItems: 'center' }}>
                        <ScreenHeaderBtn
                            iconUrl={{ uri: 'https://picsum.photos/40' }}
                            dimension={40}
                        />
                        <Text style={styles.profiletext}>{user.imgUrl}</Text>
                        <View style={styles.profiletoolContainer}>
                            <LogoutSvg />
                            <EditSvg />
                        </View>
                    </View>
                </ModalPopup>
            </View>
        </>
    )
}
export default HeaderContainer
