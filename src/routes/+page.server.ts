import { PROJECTS } from "$lib/data/projects";
import toShuffled from "$lib/utils/shuffle";

export const load = () => {
    const shuffled = toShuffled([...PROJECTS]);

    const sampleProjects = shuffled.slice(0, 2);

    return {
        sampleProjects
    };
};