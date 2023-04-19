import { StyleSheet, Text,TouchableOpacity,StatusBar, View,TextInput,KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'
import { COLORS, SIZES } from '../../src/constants/theme'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useRouter } from 'expo-router'
import { useStateContext } from '../../src/context/AuthContext'
import { FirebaseContextType } from '../../@types/CustomTypes'

const index = ():JSX.Element => {
  const router=useRouter()
  const {setUser}=useStateContext() as FirebaseContextType

  const [email,SetEmail]=useState("")
  const [password,SetPassword]=useState("")
  const handleSignUp=()=>{


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
    const user = userCredential.user;
  
    setUser({uid:user.uid as string,email:user.email as string,name:user.displayName as string,imgUrl:user.photoURL as string})
    
    router.push('/edit')
    
  })
  .catch((error) => {
    throw new Error(error)
  });

  SetEmail("")
  SetPassword("")
  
  }

  const handleLogin=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
  
      const user = userCredential.user;
      console.log(user.email);
      setUser({uid:user.uid as string,email:user.email as string,name:user.displayName as string,imgUrl:user.photoURL as string})
      router.push('/edit')
      
    })
    .catch((error) => {
      throw new Error(error)
    });
    SetEmail("")
    SetPassword("")
  }
  
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
        <StatusBar backgroundColor={COLORS.primary}  barStyle={'light-content'} />
               
       <View style={styles.inputContainer} >
        <TextInput placeholderTextColor={COLORS.white} placeholder='Email' 
        value={email}
        onChangeText={text=>SetEmail(text)} 
        style={styles.input}
        />
        <TextInput placeholderTextColor={COLORS.white} placeholder='Password'
        value={password}
        onChangeText={text=>SetPassword(text)} 
        style={styles.input}
        secureTextEntry
        />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText} >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp} style={[styles.button,styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText} >Register</Text>
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  )
}

export default index

const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:COLORS.primary,
  },inputContainer:{
    width:'80%'
  },input:{
     backgroundColor:COLORS.dark,
     paddingHorizontal:15,
     paddingVertical:10,
     borderRadius:10,
     marginTop:15

 },buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:SIZES.large

  },
  buttonText:{
    color:'white',
    fontSize:SIZES.medium,
    fontWeight:'bold'

},
  button:{
   
    backgroundColor:COLORS.secondary,
    width:'100%',
    padding:10,
    borderRadius:SIZES.xSmall,
    alignItems:'center',
    margin:SIZES.small
},buttonOutline:{
   backgroundColor:COLORS.light,
   marginTop:5,
},buttonOutlineText:{
    color:COLORS.dark,
    fontSize:SIZES.medium,
    fontWeight:'bold'

 }

})