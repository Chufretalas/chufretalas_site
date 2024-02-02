export const TAGS = {
    "javascript": { name: "javascript", bgColor: "#f1e05a", color: "black" },
    "typescript": { name: "typescript", bgColor: "#3178c6", color: "white" },
    "HTML": { name: "HTML", bgColor: "#e34c26", color: "white" },
    "CSS": { name: "CSS", bgColor: "#563d7c", color: "white" },
    "go": { name: "go", bgColor: "#00add8", color: "black" },
    "python": { name: "python", bgColor: "#3572a5", color: "white" },
    "sqlite": { name: "sqlite", bgColor: "#044a64", color: "white" },
    "postgreSQL": { name: "postgreSQL", bgColor: "#336791", color: "white" },
    "sveltekit": { name: "sveltekit", bgColor: "#ff3e00", color: "white" },
    "nextJs": { name: "nextJs", bgColor: "black", color: "white" },
    "react": { name: "react", bgColor: "#5ed3f3", color: "black" },
    "dart": { name: "dart", bgColor: "#00b4ab", color: "black" },
    "flutter": { name: "flutter", bgColor: "#5fc9f8", color: "black" },
    "rust": { name: "rust", bgColor: "#dea584", color: "black" },
    "tauri": { name: "tauri", bgColor: "#ffc131", color: "black" },
    "flask": { name: "flask", bgColor: "#3eabbf", color: "white" },
    "tailwind": { name: "tailwind", bgColor: "#38bdf8", color: "black" },
    "cypress": { name: "tailwind", bgColor: "#58d09e", color: "white" },
}

export interface Tag {
    name: string
    bgColor: string
    color: string
}