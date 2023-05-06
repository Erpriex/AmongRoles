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
            { text: 'Documentation', link: 'https://among-us.fandom.com/wiki/Mod:The_Other_Roles' },
            { text: 'Télécharger BetterCrewLink', link: 'https://github.com/OhMyGuus/BetterCrewLink/releases/download/v3.1.2/Better-CrewLink-Setup-3.1.2.exe' }
        ],
        sidebar: [
            { link: "/README.md", text: "Introduction" },
            {
                text: "Imposteurs",
                collapsible: true,
                children: [
                    { text: 'Evil Guesser / Mauvais Devin', link: '/impostors/evilGuesser.md' },
                    { text: 'Bounty Hunter / Chasseur de primes', link: '/impostors/bountyHunter.md' },
                    { text: 'Camouflager / Camoufleur', link: '/impostors/camouflager.md' },
                    { text: 'Ninja', link: '/impostors/ninja.md' },
                    { text: 'Cleaner / Nettoyeur', link: '/impostors/cleaner.md' },
                    { text: 'Eraser / Effaceur', link: '/impostors/eraser.md' },
                    { text: 'Shapeshifter', link: '/impostors/shapeshifter.md' },
                    {
                        text: "Mafias",
                        collapsible: false,
                        children: [
                            { text: "Godfather / Parrain", link: "/impostors/mafias/godfather.md" },
                            { text: "Mafioso", link: "/impostors/mafias/mafioso.md" },
                            { text: "Janitor / Concierge", link: "/impostors/mafias/janitor.md" }
                        ]
                    },
                    { text: 'Morphling', link: '/impostors/morphling.md' },
                    { text: 'Trickster / Farceur', link: '/impostors/trickster.md' },
                    { text: 'Vampire', link: '/impostors/vampire.md' },
                    { text: 'Warlock / Ensorceleur', link: '/impostors/warlock.md' },
                    { text: 'Witch / Socière', link: '/impostors/witch.md' }
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
                text: "Secondaires",
                collapsible: true,
                children: [
                    
                ]
            },
        ]
    }),
}