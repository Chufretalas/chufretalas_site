<script lang="ts">
    import CoisaCard from "$lib/components/CoisaCard.svelte";
    import CoolBox from "$lib/components/CoolBox.svelte";
    import { t } from "$langs/stores";
    import COISAS from "$lib/data/coisas";
</script>

<svelte:head>
    <title>{$t("coisas.page_title")}</title>
</svelte:head>

<main>
    <CoolBox title="🚀 {$t('coisas.title')} 🪑">
        <span>{$t("coisas.description")}</span>
        <span style:font-size="small">{$t("coisas.sub_description")}</span>
        <ul>
            <div class="projects_wrapper">
                {#each COISAS as coisa}
                    <CoisaCard {coisa} />
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
