<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";

    import Navbar from "$lib/components/Navbar.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { PROJECTS } from "$lib/data/projects";
</script>

<Navbar />
<main>
    <CoolBox title="Todos (ou quase) os meus projetos">
        <ul>
            <div class="projects_wrapper">
                {#each PROJECTS as project}
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
</style>
