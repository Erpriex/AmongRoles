import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search';

module.exports = {
    lang: 'fr-FR',
    title: 'AmongRoles',
    description: 'Documentation française et anglaise du mod TheOtherRoles pour le jeu Among Us',

    head: [
        ['meta', { name: 'theme-color', content: '#3aa675' }]
    ],

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
            { text: 'GitHub TheOtherRoles', link: 'https://github.com/TheOtherRolesAU/TheOtherRoles' },
            { text: 'Documentation TheOtherRoles', link: 'https://among-us.fandom.com/wiki/Mod:The_Other_Roles' },
            { text: 'Télécharger BetterCrewLink', link: 'https://github.com/OhMyGuus/BetterCrewLink/releases/download/v3.1.2/Better-CrewLink-Setup-3.1.2.exe' }
        ],
        sidebar: [
            { link: "/README.md", text: "Introduction" },
            {
                text: "Imposteurs",
                collapsible: true,
                children: [
                    { text: 'Mafias', link: '/impostors/mafias.md' },
                    { text: 'Morphling', link: '/impostors/morphling.md' },
                    { text: 'Camoufleur — Camouflager', link: '/impostors/camouflager.md' },
                    { text: 'Vampire', link: '/impostors/vampire.md' },
                    { text: 'Effaceur — Eraser', link: '/impostors/eraser.md' },
                    { text: 'Filou — Trickster', link: '/impostors/trickster.md' },
                    { text: 'Nettoyeur — Cleaner', link: '/impostors/cleaner.md' },
                    { text: 'Sorcier — Warlock', link: '/impostors/warlock.md' },
                    { text: 'Mandalorian — Bounty Hunter', link: '/impostors/bounty-hunter.md' },
                    { text: 'Sorcière — Witch', link: '/impostors/witch.md' },
                    { text: 'Ninja', link: '/impostors/ninja.md' },
                    { text: 'Bombardier — Bomber', link: '/impostors/bomber.md' },
                    { text: 'Devin — Guesser', link: '/guesser.md' },
                ]
            },
            {
                text: "Crewmates",
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
                text: "Modificateurs",
                collapsible: true,
                children: [
                    
                ]
            },
        ]
    }),
}