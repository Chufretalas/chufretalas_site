<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";
    import GameCard from "$lib/components/GameCard.svelte";
    import { PROJECTS } from "$lib/data/projects";
    import { t } from "$langs/stores";

    const QUICKTIMER = {
        title: "Quicktimer",
        repoURL: "",
        deployURL: "/games/quicktimer",
        tags: [],
        img: "/project_thumbnails/thumbnail_quicktimer.webp",
        description: {
            en: "A reaction time tester made in svelte.",
            "pt-BR": "Um teste de tempo de reação feito em svelte."
        },
    }
</script>


<svelte:head>
    <title>{$t("games.page_title")}</title>
</svelte:head>

<main>
    <CoolBox title="🎮 {$t('games.title')} 📺">
        <span>{$t("games.description")}</span>
        <ul>
            <div class="projects_wrapper">
                <GameCard accentColor="#19e3dc" project={PROJECTS[2]} />
                <GameCard accentColor="#e31919" project={PROJECTS[1]} />
                <GameCard accentColor="#49ff42" project={QUICKTIMER} />
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
