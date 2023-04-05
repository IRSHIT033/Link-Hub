import { StyleSheet } from "react-native"
import { COLORS, SHADOWS, SIZES } from "../../../constants/theme"


export const styles = StyleSheet.create({
   container: {
     width: 300,
     marginTop:SIZES.medium,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     padding:SIZES.small,
     backgroundColor: COLORS.tertiary,
     borderRadius:SIZES.small,
     fontSize:SIZES.xxLarge,
     ...SHADOWS.medium,
     shadowColor:COLORS.dark,
   },
   linktext:{
     fontSize: SIZES.xLarge,
     color: COLORS.light,
     fontWeight:'bold',
     padding:SIZES.xSmall
   },
   linkContainer:{
      width: "100%",
      marginTop: SIZES.medium,
   }
 
 })