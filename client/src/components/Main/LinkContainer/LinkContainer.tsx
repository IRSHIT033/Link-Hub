import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import FacebookSvgComponent from '../../../assets/svgComponent/FacebookSvg'
import LinkCard from './LinkCard'
import { styles } from './Link.style'
import GitHubSvg from '../../../assets/svgComponent/GitHubSvg'
import LinkedInSvg from '../../../assets/svgComponent/LinkedInSvg'
import TwitterSvg from '../../../assets/svgComponent/TwitterSvg'
import type { FirebaseContextType, Links } from '../../../../@types/CustomTypes'
import { useStateContext } from '../../../context/AuthContext'

const LinkContainer = () => {
    const { getlinks, links, user } = useStateContext() as FirebaseContextType

    useEffect(() => {
        getlinks()
    }, [])

    const linksDetails: Links[] = [
        {
            id: '1',
            Fieldname: 'Facebook',
            Fieldurl: links.facebook,
            Fieldsvg: <FacebookSvgComponent />,
        },
        {
            id: '2',
            Fieldname: 'GitHub',
            Fieldurl: links.github,
            Fieldsvg: <GitHubSvg />,
        },
        {
            id: '3',
            Fieldname: 'LinkedIn',
            Fieldurl: links.linkedin,
            Fieldsvg: <LinkedInSvg />,
        },
        {
            id: '4',
            Fieldname: 'Twitter',
            Fieldurl: links.twitter,
            Fieldsvg: <TwitterSvg />,
        },
    ]

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
