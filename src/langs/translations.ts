interface ILangDict {
    home: {
        about_me: {
            title: string,
            p1: string,
            p2: string,
            p3: string,
            show_more: string,
            show_less: string,
            image_description: string
        },
        my_projects: {
            title: string,
            button: string
        },
        other_pages: {
            title: string,
            games_button: string,
            coisas_button: string
        }
    },
    navbar: {
        by: string,
        projects: string,
        games: string,
        coisas: string,
    },
    game_card: {
        button: string
    },
    project_card: {
        repo_button: string
    },
    coisa_card: {
        button: string
    },
    projects: {
        title: string
    },
    games: {
        title: string,
        description: string
    },
    coisas: {
        title: string,
        description: string,
        sub_description: string
    }
}

const translations: { en: ILangDict, "pt-BR": ILangDict } = {
    en: {
        home: {
            about_me: {
                title: "About me",
                p1: `My name is Marco Antonio Benevenuto de Oliveira. I'm a brazilian software developer who loves new challenges and problem solving, from fixing some broken CSS to learning RISC-V assembly from an aliexpress board with very little documentation.`,
                p2: `I graduated as an electronics technician from IFSP in 2021, and I'm currently a computer science student at UFABC, about midway through the course.`,
                p3: `I've studied technologies including: Java, Kotlin, Dart (Flutter), Python, Javascript, HTML, CSS, Go, Rust, Elixir and anything else that peaked my interest. Now my strongest technologies are doing full stacks web applications with JS/TS with NextJS or SvelteKit, desktop and backends with golang and whatever data heavy applications that are better with python (like PDF extractions or scripts in general).`,
                show_more: "Show More",
                show_less: "Show Less",
                image_description: `↑ Me ↑`
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
            title: "(Almost) all my projects"
        },
        games: {
            title: "Games",
            description: "For you that don't the trouble of downloading the desktop versions, here are the web versions of some games/simulators I have made"
        },
        coisas: {
            title: "Coisas (from the portuguese for \"things\")",
            description: "Things that needed a place to live, but weren't worth their own separate projects",
            sub_description: "(Don't expect these coisas to match the rest of the site)"
        }

    },
    "pt-BR": {
        home: {
            about_me: {
                title: "Sobre mim",
                p1: `Meu nome é Marco Antonio Benevenuto de Oliveira. Sou um programador brasileiro que ama se desafiar e resolver problemas, desde arrumar algum CSS quebrado no frontend até aprender assembly RISC-V para usar uma plaquinha do aliexpress quase sem documentação.`,
                p2: `Sou técnico em eletrônica formado pelo IFSP em 2021, sendo que atualmente estou na metade do curso de ciência da computação na UFABC.`,
                p3: `Já estudei tecnologias incluindo: Java, Kotlin, Dart (Flutter), Python, Javascript, HTML, CSS, Go, Rust, Elixir e qualquer outra coisa que chamou o meu interesse. Atualmente meus pontos mais fortes são aplicações web full stack em JS/TS com NextJS ou SvelteKit, aplicativos desktop e backends em golang e qualquer aplicação com foco em dados que são melhor escritas em python (como extratores de PDF e scripts no geral).`,
                show_more: "Mostrar Mais",
                show_less: "Mostrar Menos",
                image_description: `↑ Eu ↑`
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
            title: "(Quase) todos os meus projetos"
        },
        games: {
            title: "Jogos",
            description: "Para você que não quer o trabalho de baixar a versão desktop, seguem versões web de alguns jogos/simuladores que eu fiz"
        },
        coisas: {
            title: "Coisas",
            description: "Coisas que precisavam de um lugar para morar, mas não mereciam um projeto separado",
            sub_description: "(Não espere consistência estética entre as coisas e o resto do site)"
        }
    },
}

typeof translations.en

export default translations