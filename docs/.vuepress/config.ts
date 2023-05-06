import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search';

module.exports = {
    lang: 'fr-FR',
    title: 'AmongRoles',
    description: '',

    plugins: [
        searchPlugin({
            locales: {
                "/": {
                    placeholder: "Rechercher",
                },
            },
        })
    ],

    theme: defaultTheme({
        lastUpdatedText: 'Mis à jour le',
        contributorsText: "Contributeurs",
        navbar: [
            { text: 'GitHub', link: 'https://github.com/TheOtherRolesAU/TheOtherRoles' },
            { text: 'Documentation', link: 'https://among-us.fandom.com/wiki/Mod:The_Other_Roles' }
        ],
        sidebar: [
            { link: "/README.md", text: "Introduction" },
            {
                text: "Imposteurs",
                collapsible: true,
                children: [
                    { text: 'Bounty Hunter / Chasseur de primes', link: '/impostors/bountyHunter.md' },
                    { text: 'Camouflager / Camoufleur', link: '/impostors/camouflager.md' }
                ]
            },
            {
                text: "Crewmate",
                collapsible: true,
                children: [
                    
                ]
            },
            {
                text: "Neutres",
                collapsible: true,
                children: [
                    
                ]
            },
            {
                text: "Secondaires",
                collapsible: true,
                children: [
                    
                ]
            },
        ]
    }),
}