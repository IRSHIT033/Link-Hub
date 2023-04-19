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
    links:userlink
    setLinks:React.Dispatch<React.SetStateAction<userlink>>
    setUser:React.Dispatch<React.SetStateAction<User>>
    loginWithGoogle:()=>void
}

export interface  User{
  uid:string,
  email: string,
  name: string,
  imgUrl?:string
}

export interface userlink{
  facebook:string,
  linkedin: string,
  twitter: string,
  github:string
}