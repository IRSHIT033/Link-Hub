import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import ScreenHeaderBtn from '../../common/Header/button/ScreenHeaderBtn'
import { styles } from './HeaderContainer.Style'
import LogoutSvg from '../../../assets/svgComponent/LogoutSvg'
import EditSvg from '../../../assets/svgComponent/EditSvg'
import ModalPopup from '../../common/Header/Modal'
import { useStateContext } from '../../../context/AuthContext'
import { FirebaseContextType } from '../../../../@types/CustomTypes'
import { useRouter } from 'expo-router'
import { auth } from '../../../../firebaseConfig'
import { signOut } from 'firebase/auth'

const HeaderContainer = () => {
    const router = useRouter()
    const [visible, setVisible] = useState<boolean>(false)
    const { user } = useStateContext() as FirebaseContextType

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const Logouthandler = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('successfully logged out')

                router.replace('/login')
            })
            .catch((err) => {
                // An error happened.
                console.log(err)
            })
    }

    const GotoEditPage = () => {
        router.replace('/edit')
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
                            iconUrl={{
                                uri: user.imgUrl ?? 'https://picsum.photos/40',
                            }}
                            dimension={40}
                        />
                        <Text style={styles.profiletext}>
                            {user.email.slice(0, 15)}
                        </Text>
                        <View style={styles.profiletoolContainer}>
                            <Pressable onPress={Logouthandler}>
                                <LogoutSvg />
                            </Pressable>
                            <Pressable onPress={GotoEditPage}>
                                <EditSvg />
                            </Pressable>
                        </View>
                    </View>
                </ModalPopup>
            </View>
        </>
    )
}
export default HeaderContainer
