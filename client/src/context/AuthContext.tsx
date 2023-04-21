import React, { useState, useEffect, useContext } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { FirebaseContextType, User } from '../../@types/CustomTypes'
import { auth, db } from '../../firebaseConfig'
import { useRouter } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore'

const StateContext = React.createContext<FirebaseContextType | null>(null)

export const useStateContext = () => {
    const context = useContext(StateContext)
    return context
}

export const Provider = ({ children }: any) => {
    const router = useRouter()
    const [links, setLinks] = useState({
        facebook: '',
        github: '',
        twitter: '',
        linkedin: '',
    })
    const [user, setUser] = useState<User>({
        uid: '',
        email: '',
        name: '',
        imgUrl: '',
    })
    const provider = new GoogleAuthProvider()

    const getlinks = async () => {
        console.log(user.uid)
        try {
            const docRef = doc(db, 'userlink', user.uid)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                const link = docSnap.data()
                console.log('Document data:')
                setLinks({
                    facebook: link.facebook,
                    github: link.github,
                    twitter: link.twitter,
                    linkedin: link.linkedin,
                })
            } else {
                // docSnap.data() will be undefined in this case
                console.log('No such document!')
                setLinks({
                    facebook: '',
                    github: '',
                    twitter: '',
                    linkedin: '',
                })
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (user.email === '') {
            router.replace('/login')
        } else {
            router.replace('/edit')
        }
        getlinks()
    }, [user])

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            console.log(result.user)
        })
    }

    return (
        <StateContext.Provider
            value={{
                loginWithGoogle,
                user,
                setUser,
                links,
                setLinks,
                getlinks,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}
