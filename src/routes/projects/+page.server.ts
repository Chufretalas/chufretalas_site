import { PROJECTS } from "$lib/data/projects";
import toShuffled from "$lib/utils/shuffle";

export const load = () => {
    return {
        projects: toShuffled([...PROJECTS])
    };
};