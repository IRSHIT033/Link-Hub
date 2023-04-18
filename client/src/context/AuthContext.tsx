import React, { useState, useEffect, useContext } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { FirebaseContextType, User } from '../../@types/CustomTypes'
import { auth } from '../../firebaseConfig'
import { useRouter } from 'expo-router'

const StateContext = React.createContext<FirebaseContextType | null>(null)

export const useStateContext = () => {
    const context = useContext(StateContext)
    return context
}

export const Provider = ({ children }: any) => {
    const router = useRouter()
    const [user, setUser] = useState<User>({ email: '', name: '', imgUrl: '' })
    const provider = new GoogleAuthProvider()

    useEffect(() => {
        if (user.email === '') {
            router.replace('/login')
        } else {
            router.replace('/')
        }
    }, [user])

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            console.log(result.user)
        })
    }

    return (
        <StateContext.Provider value={{ loginWithGoogle, user, setUser }}>
            {children}
        </StateContext.Provider>
    )
}
