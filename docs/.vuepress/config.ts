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
                    { text: 'Maire — Mayor', link: '/crewmates/mayor.md' },
                    { text: 'Ingénieur — Engineer', link: '/crewmates/engineer.md' },
                    { text: 'Shérif — Sheriff', link: '/crewmates/sheriff.md' },
                    { text: 'Adjoint — Deputy', link: '/crewmates/deputy.md' },
                    { text: 'Eclaireur — Lighter', link: '/crewmates/lighter.md' },
                    { text: 'Detective', link: '/crewmates/detective.md' },
                    { text: 'Maître du Temps — Time Master', link: '/crewmates/time-master.md' },
                    { text: 'Médecin — Medic', link: '/crewmates/medic.md' },
                    { text: 'Swapeur — Swapper', link: '/crewmates/swapper.md' },
                    { text: 'Voyant — Seer', link: '/crewmates/seer.md' },
                    { text: 'Hacker', link: '/crewmates/hacker.md' },
                    { text: 'Pisteur — Tracker', link: '/crewmates/tracker.md' },
                    { text: 'Mouchard — Snitch', link: '/crewmates/snitch.md' },
                    { text: 'Espion — Spy', link: '/crewmates/spy.md' },
                    { text: 'Dieu du Portail — Portalmaker', link: '/crewmates/portalmaker.md' },
                    { text: 'Agent de Sécurité — Security Guard', link: '/crewmates/security-guard.md' },
                    { text: 'Medium', link: '/crewmates/medium.md' },
                ]
            },
            {
                text: "Neutres",
                collapsible: true,
                children: [
                    { text: 'Bouffon — Jester', link: '/neutrals/jester.md' },
                    { text: 'Incendiaire — Arsonist', link: '/neutrals/arsonist.md' },
                    { text: 'Chacal — Jackal', link: '/neutrals/jackal.md' },
                    { text: 'Acolyte — Sidekick', link: '/neutrals/sidekick.md' },
                    { text: 'Vautour — Vulture', link: '/neutrals/vulture.md' },
                    { text: 'Avocat — Lawyer', link: '/neutrals/lawyer.md' },
                    { text: 'Procureur — Prosecutor', link: '/neutrals/prosecutor.md' },
                    { text: 'Poursuivant — Pursuer', link: '/neutrals/pursuer.md' },
                    { text: 'Voleur — Thief', link: '/neutrals/thief.md' },
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