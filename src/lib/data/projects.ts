import { TAGS, type Tag } from "./tags"


export interface IProject {
    title: string
    repoURL?: string
    deployURL?: string
    tags: Tag[]
    img?: string
    description: { en: string; "pt-BR": string; }
}

export const PROJECTS: IProject[] = [
    {
        title: "Site Pessoal",
        repoURL: "https://github.com/Chufretalas/chufretalas_site",
        deployURL: "/",
        tags: [TAGS.sveltekit, TAGS.typescript, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/thumbnail_site_pessoal.webp",
        description: {
            en: "This very own site.",
            "pt-BR": "Esse site aqui."
        },
    },
    {
        title: "Scramble Ghosts",
        repoURL: "https://github.com/Chufretalas/scramble_ghosts",
        deployURL: "/jogos/scramble_ghosts",
        tags: [TAGS.go, TAGS.wasm],
        img: "/project_thumbnails/thumbnail_scramble_ghosts.webp",
        description: {
            en: "A little game made 100% with go.",
            "pt-BR": "Um joguinho feito 100% em go."
        },
    },
    {
        title: "Falling Sand",
        repoURL: "https://github.com/Chufretalas/falling_sand",
        deployURL: "/jogos/falling_sand",
        tags: [TAGS.go, TAGS.wasm],
        img: "/project_thumbnails/thumbnail_falling_sand.webp",
        description: {
            en: "Falling sand simulation made with go.",
            "pt-BR": "Simulação de areia caindo feita em go."
        },
    },
    {
        title: "Adopet",
        repoURL: "https://github.com/Chufretalas/adopet",
        deployURL: "https://adopet-chuf.vercel.app/",
        tags: [TAGS.nextJs, TAGS.typescript, TAGS.postgreSQL, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/thumbnail_adopet.webp",
        description: {
            en: "My most complex web project, with auth, lots of CRUDs, chatrooms and more.",
            "pt-BR": "Meu projeto web mais completo, com autenticação, diversos CRUDs, chat e mais."
        },
    },
    {
        title: "BCT-CALC",
        repoURL: "https://github.com/Chufretalas/BCT-CALC",
        deployURL: "https://bct-calc.vercel.app/",
        tags: [TAGS.nextJs, TAGS.typescript, TAGS.HTML, TAGS.tailwind, TAGS.cypress],
        img: "/project_thumbnails/thumbnail_bct_calc.webp",
        description: {
            en: "A site with tools to help me in university.",
            "pt-BR": "Um site com ferramentas para me ajudar na faculdade."
        },
    },
    {
        title: "Em Frente",
        repoURL: "https://github.com/Chufretalas/em_frente",
        tags: [TAGS.dart, TAGS.flutter, TAGS.sqlite],
        img: "/project_thumbnails/thumbnail_em_frente.webp",
        description: {
            en: "A flutter app to create and maintain habits.",
            "pt-BR": "Um aplicativo flutter para criar e manter hábitos."
        },
    },
    {
        title: "Aluraflix",
        repoURL: "https://github.com/Chufretalas/aluraflix",
        deployURL: "https://aluraflix-chufretalas.vercel.app/",
        tags: [TAGS.sveltekit, TAGS.typescript, TAGS.postgreSQL],
        img: "/project_thumbnails/thumbnail_aluraflix.webp",
        description: {
            en: "A backend with a complete CRUD accessible through a REST API.",
            "pt-BR": "Uma backend com um CRUD completo acessível por uma API REST."
        },
    },
    {
        title: "Svelte Github Search",
        repoURL: "https://github.com/Chufretalas/svelte_github_search",
        deployURL: "http://svelte-github-search-umber.vercel.app/",
        tags: [TAGS.sveltekit, TAGS.typescript],
        img: "/project_thumbnails/thumbnail_svelte_github_search.webp",
        description: {
            en: "An app that uses the github API to search users.",
            "pt-BR": "Um app que consome a API do Github para pesquisar usuários."
        },
    },
    {
        title: "Pantsbase",
        repoURL: "https://github.com/Chufretalas/pantsbase",
        tags: [TAGS.go, TAGS.sqlite, TAGS.javascript, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/thumbnail_pantsbase.webp",
        description: {
            en: "A pocketbase clone made from scratch and with as little dependencies as possible.",
            "pt-BR": "Um clone do pocketbase feita completamente do zero e com o mínimo de dependências possível."
        },
    },
    {
        title: "AoC 23",
        repoURL: "https://github.com/Chufretalas/aoc_23",
        tags: [TAGS.go],
        img: "/project_thumbnails/thumbnail_aoc_23.webp",
        description: {
            en: "My solutions to Advent of Code 2023.",
            "pt-BR": "Minhas soluções do Advent of Code 2023."
        },
    },
    {
        title: "AoC 22",
        repoURL: "https://github.com/Chufretalas/aoc_22",
        tags: [TAGS.go, TAGS.python, TAGS.javascript],
        img: "/project_thumbnails/thumbnail_aoc_22.webp",
        description: {
            en: "My solutions to Advent of Code 2022.",
            "pt-BR": "Minhas soluções do Advent of Code 2022."
        },
    },
    {
        title: "Sadpad",
        repoURL: "https://github.com/Chufretalas/sadpad",
        tags: [TAGS.sveltekit, TAGS.typescript, TAGS.rust, TAGS.tauri, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/thumbnail_sadpad.webp",
        description: {
            en: "Notepad made with tauri and svelte.",
            "pt-BR": "Notepad feito com tauri e svelte."
        },
    },
    {
        title: "Sad Tasks Flask",
        repoURL: "https://github.com/Chufretalas/sad_tasks_flask",
        tags: [TAGS.python, TAGS.flask, TAGS.postgreSQL, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/thumbnail_sad_tasks_flask.webp",
        description: {
            en: "A TODO app made with flask and postgres.",
            "pt-BR": "Um TODO app feito com flask e postgres."
        },
    },
    {
        title: "WS Guessing Game",
        repoURL: "https://github.com/Chufretalas/web_speech_guessing_game_pt-br",
        tags: [TAGS.python, TAGS.flask, TAGS.javascript, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/ws_guessing_game.webp",
        description: {
            en: "A guessing game that uses voice as the input.",
            "pt-BR": "Jogo de adivinhação que usa voz como entrada."
        },
    },
]
