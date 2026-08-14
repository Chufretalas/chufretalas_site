import type { BaseTranslation } from '../i18n-types'

const en = {
    home: {
        page_title: "Home",
        about_me: {
            title: "About me",
            p1: "My name is Marco Antonio Benevenuto de Oliveira. I'm a brazilian software developer who loves new challenges and problem solving, from fixing some broken CSS to learning RISC-V assembly from an aliexpress board with very little documentation.",
            p2: "I graduated as an electronics technician from IFSP in 2021, and I'm currently a computer science student at UFABC, about midway through the course.",
            p3: "I've studied technologies including: Java, Kotlin, Dart (Flutter), Python, Javascript, HTML, CSS, Go, Rust, Elixir and anything else that peaked my interest. Now my strongest technologies are doing full stacks web applications with JS/TS with NextJS or SvelteKit, desktop and backends with golang and whatever data heavy applications that are better with python (like PDF extractions or scripts in general).",
            show_more: "Show More",
            show_less: "Show Less",
            image_description: "↑ Me ↑"
        },
        my_projects: {
            title: "My projects",
            button: "All projects"
        },
        other_pages: {
            title: "Other Pages",
            games_button: "Games",
            coisas_button: "Coisas"
        }
    },
    navbar: {
        by: "by",
        projects: "Projects",
        games: "Games",
        coisas: "Coisas",
    },
    game_card: {
        button: "Visit Game"
    },
    project_card: {
        repo_button: "Repository"
    },
    coisa_card: {
        button: "Visit Coisa"
    },
    projects: {
        page_title: "Projects",
        title: "(Almost) all my projects"
    },
    games: {
        page_title: "Games",
        title: "Games",
        description: "For you that don't the trouble of downloading the desktop versions, here are the web versions of some games/simulators I have made"
    },
    coisas: {
        page_title: "Coisas",
        title: "Coisas (from the portuguese for \"things\")",
        description: "Things that needed a place to live, but weren't worth their own separate projects",
        sub_description: "(Don't expect these coisas to match the rest of the site)"
    }
} satisfies BaseTranslation

export default en
