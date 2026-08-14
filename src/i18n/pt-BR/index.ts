import type { Translation } from '../i18n-types'

const pt_BR = {
    home: {
        page_title: "Home",
        about_me: {
            title: "Sobre mim",
            p1: "Meu nome é Marco Antonio Benevenuto de Oliveira. Sou um programador brasileiro que ama se desafiar e resolver problemas, desde arrumar algum CSS quebrado no frontend até aprender assembly RISC-V para usar uma plaquinha do aliexpress quase sem documentação.",
            p2: "Sou técnico em eletrônica formado pelo IFSP em 2021, sendo que atualmente estou na metade do curso de ciência da computação na UFABC.",
            p3: "Já estudei tecnologias incluindo: Java, Kotlin, Dart (Flutter), Python, Javascript, HTML, CSS, Go, Rust, Elixir e qualquer outra coisa que chamou o meu interesse. Atualmente meus pontos mais fortes são aplicações web full stack em JS/TS com NextJS ou SvelteKit, aplicativos desktop e backends em golang e qualquer aplicação com foco em dados que são melhor escritas em python (como extratores de PDF e scripts no geral).",
            show_more: "Mostrar Mais",
            show_less: "Mostrar Menos",
            image_description: "↑ Eu ↑"
        },
        my_projects: {
            title: "Meus projetos",
            button: "Todos os projetos"
        },
        other_pages: {
            title: "Outras páginas",
            games_button: "Jogos",
            coisas_button: "Coisas"
        }
    },
    navbar: {
        by: "por",
        projects: "Projetos",
        games: "Jogos",
        coisas: "Coisas",
    },
    game_card: {
        button: "Visitar Jogo"
    },
    project_card: {
        repo_button: "Repositório"
    },
    coisa_card: {
        button: "Visitar Coisa"
    },
    projects: {
        page_title: "Projetos",
        title: "(Quase) todos os meus projetos"
    },
    games: {
        page_title: "Jogos",
        title: "Jogos",
        description: "Para você que não quer o trabalho de baixar a versão desktop, seguem versões web de alguns jogos/simuladores que eu fiz"
    },
    coisas: {
        page_title: "Coisas",
        title: "Coisas",
        description: "Coisas que precisavam de um lugar para morar, mas não mereciam um projeto separado",
        sub_description: "(Não espere consistência estética entre as coisas e o resto do site)"
    }
} satisfies Translation

export default pt_BR
