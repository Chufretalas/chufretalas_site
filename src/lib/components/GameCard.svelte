<script lang="ts">
    import type { IProject } from "$lib/data/projects";
    import CoolBox from "./CoolBox.svelte";
    import { t } from "$langs/stores";
    export let project: IProject;
    export let accentColor = "black";
</script>

<div class="wrapper">
    <CoolBox {accentColor}>
        <div class="inner_wrapper">
            <span class="title">{project.title}</span>
            <img
                class="preview_img"
                src={project.img}
                alt={`${project.title}'s preview image`}
            />
            <a href={project.deployURL}>{$t("game_card.button")}</a>
            <p class="description">
                {project.description}
            </p>
        </div>
    </CoolBox>
</div>

<style>
    a {
        color: black;
        text-decoration: none;
    }

    .wrapper {
        width: 400px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .inner_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 3px;
        height: 250px;
    }

    .title {
        font-weight: bold;
        font-size: 1.05rem;
    }

    .preview_img {
        border: 1px solid black;
        border-radius: 6px;
        max-width: 75%;
        max-height: 100%;
        margin: auto;
        filter: drop-shadow(2px 2px 3px rgb(67, 67, 67));
    }

    a {
        margin: 5px auto;
        width: 40%;
        background-color: white;
        color: black;
        border: 3px solid black;
        font-weight: bold;
        text-align: center;
        padding: 4px;
        transition: all 200ms;
    }

    a:hover {
        background-color: black;
        color: white;
    }

    .description {
        font-size: small;
    }

    @media only screen and (max-width: 768px) {
        .wrapper {
            width: 100%;
        }
    }
</style>
