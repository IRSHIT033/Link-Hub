import { StyleSheet, Text,TouchableOpacity,StatusBar, View,TextInput,KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'

import { COLORS, SIZES } from '../../src/constants/theme'
import GitHubSvg from '../../src/assets/svgComponent/GitHubSvg'
import FacebookSvgComponent from '../../src/assets/svgComponent/FacebookSvg'
import LinkedInSvg from '../../src/assets/svgComponent/LinkedInSvg'
import TwitterSvg from '../../src/assets/svgComponent/TwitterSvg'
import { useStateContext } from '../../src/context/AuthContext'
import { FirebaseContextType } from '../../@types/CustomTypes'
import { useRouter } from 'expo-router'
import { collection, doc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'




const Edit = () => {
 const router=useRouter()   
 const {links,user}=useStateContext() as FirebaseContextType
 const[LinkContainer,setLinkcontainer]=useState({facebook:links.facebook,github:links.github,linkedin:links.linkedin,twitter:links.twitter})
  
 const editLinks=async()=>{
    console.log(user.uid);
    
    const userref=doc(db,"userlink",user.uid)

    // if(LinkContainer.facebook !== '' || LinkContainer.github!== '' || LinkContainer.linkedin!=='' || LinkContainer.twitter!=='' ){
    
    try{
    await setDoc(userref,{
        facebook:LinkContainer.facebook,
        github:LinkContainer.github,
         linkedin:LinkContainer.linkedin,
        twitter:LinkContainer.twitter,
     })
    
     
    }catch(err){
      console.log(err);
      
    }finally{
      router.replace('/')
    }

 }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    <StatusBar backgroundColor={COLORS.primary}  barStyle={'light-content'} />
           
   <View style={styles.inputContainer} >
    <GitHubSvg fill={COLORS.light} scaleX={0.6} scaleY={0.6}/>
    <TextInput placeholderTextColor={COLORS.white} value={LinkContainer.github} onChangeText={(text)=>setLinkcontainer({...LinkContainer,github:text})} placeholder='Github' 
    style={styles.input}
    />
    <FacebookSvgComponent fill={COLORS.light} scaleX={0.6} scaleY={0.6}/>
    <TextInput placeholderTextColor={COLORS.white}  value={LinkContainer.facebook}  onChangeText={(text)=>setLinkcontainer({...LinkContainer,facebook:text})} placeholder='Facebook'
    style={styles.input}
    />
    <LinkedInSvg fill={COLORS.light} scaleX={0.6} scaleY={0.6}/>
    <TextInput placeholderTextColor={COLORS.white} value={LinkContainer.linkedin}  onChangeText={(text)=>setLinkcontainer({...LinkContainer,linkedin:text})} placeholder='LinkedIn'
    style={styles.input}
    />
     <TwitterSvg fill={COLORS.light} scaleX={0.6} scaleY={0.6}/>
    <TextInput placeholderTextColor={COLORS.white} value={LinkContainer.twitter}  onChangeText={(text)=>setLinkcontainer({...LinkContainer,twitter:text})} placeholder='Twitter'
    style={styles.input}
    />
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={editLinks} style={styles.button}>
            <Text style={styles.buttonText} >edit</Text>
        </TouchableOpacity>
       
    </View>

</KeyboardAvoidingView>
  )
}

export default Edit

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:COLORS.primary,
   },inputContainer:{
     width:'80%'
   },input:{
      color:COLORS.white,
      backgroundColor:COLORS.dark,
      paddingHorizontal:15,
      paddingVertical:10,
      borderRadius:10,
     
 
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