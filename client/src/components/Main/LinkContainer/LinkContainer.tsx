import React from 'react';
import { FlatList, View } from 'react-native';
import FacebookSvgComponent from '../../../assets/svgComponent/FacebookSvg';
import LinkCard from './LinkCard';
import { styles } from './Link.style';
import GitHubSvg from '../../../assets/svgComponent/GitHubSvg';
import LinkedInSvg from '../../../assets/svgComponent/LinkedInSvg';

const Links=[
 {
    id:'1',
    Fieldname:'Facebook',
    Fieldurl:'https://www.facebook.com/irshit.mukherjee.1/',
    Fieldsvg: <FacebookSvgComponent/>
 },
 {
    id:'2',
    Fieldname:'GitHub',
    Fieldurl:'https://github.com/IRSHIT033',
    Fieldsvg: <GitHubSvg/>
 },
 {
    id:'3',
    Fieldname:'LinkedIn',
    Fieldurl:'https://www.linkedin.com/in/irshit-mukherjee-693a99219/',
    Fieldsvg: <LinkedInSvg/>
 }
]

const LinkContainer = () => {
  return (
    
    <View style={styles.linkContainer}>
    <FlatList 
    data={Links}
    renderItem={({item})=><LinkCard Fieldname={item.Fieldname} Fieldsvg={item.Fieldsvg} Fieldurl={item.Fieldurl}/>}
    keyExtractor={(item)=>item.id}
    />
    </View>
  )
}

export default LinkContainer