export interface ICoisa {
    title: string,
    description: {
        "en": string,
        "pt-BR": string,
    },
    link: string,
    accentColor: string
}

const COISAS: ICoisa[] = [
    {
        title: "Double Coisa",
        description: {
            "en": "A table to keep track of the points in a game of double 9, double 12 or whichever other double.",
            "pt-BR": "Um tabela para contar os pontos do jogo double 9, double 12, ou o double que for.",
        },
        link: "/coisas/double_coisa",
        accentColor: "#f8ce7f"
    },
    {
        title: "Letter Coisa",
        description: {
            en: "A robust but easy to use random letter picker.",
            "pt-BR": "Um sorteador de letra aleatória robusto e simples de usar."
        },
        link: "/coisas/letter_coisa",
        accentColor: "#267cdd"
    }
]

export default COISAS