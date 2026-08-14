<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";

    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import LL from "$i18n/i18n-svelte";

    let { data } = $props();

    let projects = $derived(data.projects);
</script>

<svelte:head>
    <title>{$LL.projects.page_title()}</title>
</svelte:head>

<main>
    <CoolBox title={$LL.projects.title()}>
        <ul>
            <div class="projects_wrapper">
                {#each projects as project}
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
