import React from 'react'
import { FlatList, View } from 'react-native'
import FacebookSvgComponent from '../../../assets/svgComponent/FacebookSvg'
import LinkCard from './LinkCard'
import { styles } from './Link.style'
import GitHubSvg from '../../../assets/svgComponent/GitHubSvg'
import LinkedInSvg from '../../../assets/svgComponent/LinkedInSvg'
import TwitterSvg from '../../../assets/svgComponent/TwitterSvg'
import { Links } from '../../../util/Types/CustomTypes'

const linksDetails: Links[] = [
    {
        id: '1',
        Fieldname: 'Facebook',
        Fieldurl: 'https://www.facebook.com/irshit.mukherjee.1/',
        Fieldsvg: <FacebookSvgComponent />,
    },
    {
        id: '2',
        Fieldname: 'GitHub',
        Fieldurl: 'https://github.com/IRSHIT033',
        Fieldsvg: <GitHubSvg />,
    },
    {
        id: '3',
        Fieldname: 'LinkedIn',
        Fieldurl: 'https://www.linkedin.com/in/irshit-mukherjee-693a99219/',
        Fieldsvg: <LinkedInSvg />,
    },
    {
        id: '4',
        Fieldname: 'Twitter',
        Fieldurl: 'https://twitter.com/IrshitMukherjee',
        Fieldsvg: <TwitterSvg />,
    },
]

const LinkContainer = () => {
    return (
        <View style={styles.linkContainer}>
            <FlatList
                data={linksDetails}
                renderItem={({ item }) => (
                    <LinkCard
                        Fieldname={item.Fieldname}
                        Fieldsvg={item.Fieldsvg}
                        Fieldurl={item.Fieldurl}
                    />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default LinkContainer
