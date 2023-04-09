module.exports = ({ config }) => ({
    name: config.name,
    slug: 'link-hub',
    expo: {
        scheme: 'link-hub',
    },
    eas: {
        projectId: 'd9d88a00-0d4f-42ed-b273-6c22010ee971',
    },

    android: {
        package: 'com.irshit033.linkhub',
        versionCode: 1,
    },
})
