<script lang="ts">
    import { t, locale } from "$langs/stores";
    import type { ICoisa } from "$lib/data/coisas";
    import CoolBox from "./CoolBox.svelte";

    let { coisa }: { coisa: ICoisa } = $props();
</script>

<div class="coisa_card">
    <CoolBox accentColor={coisa.accentColor}>
        <div class="coisa_inner_wrapper">
            <span class="coisa_title">{coisa.title}</span>
            <p>
                {coisa.description[$locale]}
            </p>
            <a class="coisa_link" href={coisa.link}>{$t("coisa_card.button")}</a
            >
        </div>
    </CoolBox>
</div>

<style>
    .coisa_card {
        width: 400px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .coisa_title {
        display: block;
        text-align: center;
        margin: 10px 0;
        font-size: larger;
        font-weight: bolder;
        text-decoration: underline;
    }

    .coisa_link {
        display: block;
        margin: 10px auto;
        width: 40%;
        background-color: white;
        color: black;
        border: 3px solid black;
        font-weight: bold;
        text-align: center;
        padding: 4px;
        transition: all 200ms;
    }

    .coisa_link:hover {
        background-color: black;
        color: white;
    }
</style>
