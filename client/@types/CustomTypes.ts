export interface Links {
    id: string
    Fieldname: string
    Fieldurl: string
    Fieldsvg: JSX.Element
}

export interface Auth{

}

export type FirebaseContextType={
    user:User
    setUser:React.Dispatch<React.SetStateAction<User>>
    loginWithGoogle:()=>void
}

export interface  User{
  email: string,
  name: string,
  imgUrl?:string
}