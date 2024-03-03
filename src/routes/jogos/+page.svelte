<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { PROJECTS } from "$lib/data/projects";

    //TODO: make a game card with a bigger image, no tags and no repo link, can use the same data as the project card
</script>

<main>
    <CoolBox title="🎮 Jogos 📺">
        <span
            >Para você que não quer o trabalho de baixar a versão normal, seguem
            versões web de alguns jogos/simuladores que fiz</span
        >
        <ul>
            <div class="projects_wrapper">
                <ProjectCard accentColor="#19e3dc" project={PROJECTS[2]} />
                <ProjectCard
                    accentColor="#e31919"
                    project={PROJECTS[1]}
                />
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

    span {
        display: block;
        text-align: center;
        margin: 10px 0;
    }

    @media only screen and (max-width: 768px) {
        main {
            width: 100%;
            margin: 0 auto;
        }
    }
</style>
