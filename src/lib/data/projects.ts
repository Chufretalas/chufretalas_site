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
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Esse site aqui",
    },
    {
        title: "Scramble Ghosts",
        repoURL: "https://github.com/Chufretalas/scramble_ghosts",
        tags: [TAGS.go],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Um joguinho feito 100% em go.",
    },
    {
        title: "Adopet",
        repoURL: "https://github.com/Chufretalas/adopet",
        deployURL: "https://adopet-chuf.vercel.app/",
        tags: [TAGS.nextJs, TAGS.typescript, TAGS.postgreSQL, TAGS.HTML, TAGS.CSS],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Meu projeto web mais completo, com autenticação, diversos CRUDs, chat e mais.",
    },
    {
        title: "BCT-CALC",
        repoURL: "https://github.com/Chufretalas/BCT-CALC",
        deployURL: "https://bct-calc.vercel.app/",
        tags: [TAGS.nextJs, TAGS.typescript, TAGS.HTML, TAGS.tailwind, TAGS.cypress],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Um site com ferramentas que me ajudaram na faculdade.",
    },
    {
        title: "Em Frente",
        repoURL: "https://github.com/Chufretalas/em_frente",
        tags: [TAGS.dart, TAGS.flutter, TAGS.sqlite],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Um aplicativo flutter para criar e manter hábitos.",
    },
    {
        title: "Aluraflix",
        repoURL: "https://github.com/Chufretalas/aluraflix",
        deployURL: "https://aluraflix-chufretalas.vercel.app/",
        tags: [TAGS.sveltekit, TAGS.typescript, TAGS.postgreSQL],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Uma backend com um CRUD completo acessível por uma API REST.",
    },
    {
        title: "Svelte Github Search",
        repoURL: "https://github.com/Chufretalas/svelte_github_search",
        deployURL: "http://svelte-github-search-umber.vercel.app/",
        tags: [TAGS.sveltekit, TAGS.typescript],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Um app que consome a API do Github para pesquisar usuários.",
    },
    {
        title: "Pantsbase",
        repoURL: "https://github.com/Chufretalas/pantsbase",
        tags: [TAGS.go, TAGS.sqlite, TAGS.javascript, TAGS.HTML, TAGS.CSS],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Uma versão do pocketbase feita completamente do zero e com o mínimo de dependências possível.",
    },
    {
        title: "AoC 23",
        repoURL: "https://github.com/Chufretalas/aoc_23",
        tags: [TAGS.go],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Minhas soluções do Advent of Code 2023.",
    },
    {
        title: "AoC 22",
        repoURL: "https://github.com/Chufretalas/aoc_22",
        tags: [TAGS.go, TAGS.python, TAGS.javascript],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Minhas soluções do Advent of Code 2022.",
    },
    {
        title: "Sadpad",
        repoURL: "https://github.com/Chufretalas/sadpad",
        tags: [TAGS.sveltekit, TAGS.typescript, TAGS.rust, TAGS.tauri, TAGS.HTML, TAGS.CSS],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Notepad feito com tauri e svelte.",
    },
    {
        title: "Sad Tasks Flask",
        repoURL: "https://github.com/Chufretalas/sad_tasks_flask",
        tags: [TAGS.python, TAGS.flask, TAGS.postgreSQL, TAGS.HTML, TAGS.CSS],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Um TODO app feito com flask e postgres.",
    },
    {
        title: "WS Guessing Game",
        repoURL: "https://github.com/Chufretalas/web_speech_guessing_game_pt-br",
        tags: [TAGS.python, TAGS.flask, TAGS.javascript, TAGS.HTML, TAGS.CSS],
        img: "https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg",
        description: "Jogo de adivinhação que usa voz como entrada.",
    },
]