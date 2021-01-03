module.exports = {
    siteMetadata: {
        title: 'I am dimastark!',
        siteUrl: 'https://dimastark.ru'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.md', '.mdx'],
                defaultLayouts: {
                    default: require.resolve('./src/components/layout/index.ts')
                }
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-root-import',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        }
    ]
};
