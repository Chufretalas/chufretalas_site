import { TAGS, type Tag } from "./tags"

export interface IProject {
    title: string
    repoURL?: string
    deployURL?: string
    tags: Tag[]
    img?: string
    description: string
}

export const PROJECTS: IProject[] = [
    {
        title: "Site Pessoal",
        repoURL: "https://github.com/Chufretalas/chufretalas_site",
        deployURL: "/",
        tags: [TAGS.sveltekit, TAGS.typescript, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/thumbnail_site_pessoal.webp",
        description: "Esse site aqui",
    },
    {
        title: "Scramble Ghosts",
        repoURL: "https://github.com/Chufretalas/scramble_ghosts",
        deployURL: "/jogos/scramble_ghosts",
        tags: [TAGS.go, TAGS.wasm],
        img: "/project_thumbnails/thumbnail_scramble_ghosts.webp",
        description: "Um joguinho feito 100% em go.",
    },
    {
        title: "Falling Sand",
        repoURL: "https://github.com/Chufretalas/falling_sand",
        deployURL: "/jogos/falling_sand",
        tags: [TAGS.go, TAGS.wasm],
        img: "/project_thumbnails/thumbnail_falling_sand.webp",
        description: "Simulação de areia caindo feita em go.",
    },
    {
        title: "Adopet",
        repoURL: "https://github.com/Chufretalas/adopet",
        deployURL: "https://adopet-chuf.vercel.app/",
        tags: [TAGS.nextJs, TAGS.typescript, TAGS.postgreSQL, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/thumbnail_adopet.webp",
        description: "Meu projeto web mais completo, com autenticação, diversos CRUDs, chat e mais.",
    },
    {
        title: "BCT-CALC",
        repoURL: "https://github.com/Chufretalas/BCT-CALC",
        deployURL: "https://bct-calc.vercel.app/",
        tags: [TAGS.nextJs, TAGS.typescript, TAGS.HTML, TAGS.tailwind, TAGS.cypress],
        img: "/project_thumbnails/thumbnail_bct_calc.webp",
        description: "Um site com ferramentas que me ajudaram na faculdade.",
    },
    {
        title: "Em Frente",
        repoURL: "https://github.com/Chufretalas/em_frente",
        tags: [TAGS.dart, TAGS.flutter, TAGS.sqlite],
        img: "/project_thumbnails/thumbnail_em_frente.webp",
        description: "Um aplicativo flutter para criar e manter hábitos.",
    },
    {
        title: "Aluraflix",
        repoURL: "https://github.com/Chufretalas/aluraflix",
        deployURL: "https://aluraflix-chufretalas.vercel.app/",
        tags: [TAGS.sveltekit, TAGS.typescript, TAGS.postgreSQL],
        img: "/project_thumbnails/thumbnail_aluraflix.webp",
        description: "Uma backend com um CRUD completo acessível por uma API REST.",
    },
    {
        title: "Svelte Github Search",
        repoURL: "https://github.com/Chufretalas/svelte_github_search",
        deployURL: "http://svelte-github-search-umber.vercel.app/",
        tags: [TAGS.sveltekit, TAGS.typescript],
        img: "/project_thumbnails/thumbnail_svelte_github_search.webp",
        description: "Um app que consome a API do Github para pesquisar usuários.",
    },
    {
        title: "Pantsbase",
        repoURL: "https://github.com/Chufretalas/pantsbase",
        tags: [TAGS.go, TAGS.sqlite, TAGS.javascript, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/thumbnail_pantsbase.webp",
        description: "Uma versão do pocketbase feita completamente do zero e com o mínimo de dependências possível.",
    },
    {
        title: "AoC 23",
        repoURL: "https://github.com/Chufretalas/aoc_23",
        tags: [TAGS.go],
        img: "/project_thumbnails/thumbnail_aoc_23.webp",
        description: "Minhas soluções do Advent of Code 2023.",
    },
    {
        title: "AoC 22",
        repoURL: "https://github.com/Chufretalas/aoc_22",
        tags: [TAGS.go, TAGS.python, TAGS.javascript],
        img: "/project_thumbnails/thumbnail_aoc_22.webp",
        description: "Minhas soluções do Advent of Code 2022.",
    },
    {
        title: "Sadpad",
        repoURL: "https://github.com/Chufretalas/sadpad",
        tags: [TAGS.sveltekit, TAGS.typescript, TAGS.rust, TAGS.tauri, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/thumbnail_sadpad.webp",
        description: "Notepad feito com tauri e svelte.",
    },
    {
        title: "Sad Tasks Flask",
        repoURL: "https://github.com/Chufretalas/sad_tasks_flask",
        tags: [TAGS.python, TAGS.flask, TAGS.postgreSQL, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/thumbnail_sad_tasks_flask.webp",
        description: "Um TODO app feito com flask e postgres.",
    },
    {
        title: "WS Guessing Game",
        repoURL: "https://github.com/Chufretalas/web_speech_guessing_game_pt-br",
        tags: [TAGS.python, TAGS.flask, TAGS.javascript, TAGS.HTML, TAGS.CSS],
        img: "/project_thumbnails/ws_guessing_game.webp",
        description: "Jogo de adivinhação que usa voz como entrada.",
    },
]
