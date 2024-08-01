<script lang="ts">
    import type { IProject } from "$lib/data/projects";
    import CoolBox from "./CoolBox.svelte";
    import { t } from "$langs/stores";
    export let project: IProject;
    export let accentColor = "black";
</script>

<div class="wrapper">
    <CoolBox accentColor={accentColor}>
        <div class="inner_wrapper">
            <span class="title">{project.title}</span>
            <div class="tags_and_img">
                <ul class="tag_list">
                    {#each project.tags as tag}
                        <li
                            style:background-color={tag.bgColor}
                            style:color={tag.color}
                        >
                            {tag.name}
                        </li>
                    {/each}
                </ul>
                <img
                    class="preview_img"
                    src={project.img}
                    alt={`${project.title}'s preview image`}
                />
            </div>
            <div class="external_buttons">
                {#if project.repoURL}
                    <a href={project.repoURL} target="_blank">{$t("project_card.repo_button")}</a>
                {/if}
                {#if project.deployURL}
                    <a href={project.deployURL} target="_blank">Deployment</a>
                {/if}
            </div>
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
        height: 200px;
    }

    .title {
        font-weight: bold;
        font-size: 1.05rem;
    }

    .tags_and_img {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .tag_list {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        gap: 5px;
    }

    .tag_list li {
        background-color: black;
        color: white;
        font-size: smaller;
        border-radius: 9999999px;
        padding: 3px 6px;
        height: fit-content;
    }

    .preview_img {
        border: 1px solid black;
        border-radius: 6px;
        max-width: 50%;
        max-height: 100%;
    }

    .external_buttons {
        display: flex;
        justify-content: center;
        column-gap: 10px;
    }

    .external_buttons a {
        width: 40%;
        background-color: white;
        color: black;
        border: 3px solid black;
        font-weight: bold;
        text-align: center;
        padding: 4px;
        transition: all 200ms;
    }

    .external_buttons a:hover {
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
