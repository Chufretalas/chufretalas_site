<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";

    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { PROJECTS } from "$lib/data/projects";
    import toShuffled from "$lib/utils/shuffle";
    import { t } from "$langs/stores";
</script>

<main>
    <CoolBox title={$t("projects.title")}>
        <ul>
            <div class="projects_wrapper">
                {#each toShuffled(PROJECTS) as project}
                    <ProjectCard {project} />
                {/each}
            </div>
        </ul>
    </CoolBox>
</main>

<style>
    main {
        width: 90%;
        margin: 0 auto;
    }

    .projects_wrapper {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    @media only screen and (max-width: 768px) {
        main {
            width: 100%;
            margin: 0 auto;
        }
    }
</style>
