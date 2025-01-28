<script lang="ts">
    import EbitengineGame from "$lib/components/EbitengineGame.svelte";
    import { t } from "$langs/stores";
</script>

<svelte:head>
    <title>{$t("games.page_title")} - Falling Sand</title>
</svelte:head>

<EbitengineGame
    title={"Falling Sand (v1)"}
    instructions={"LMB: colocar | RMB: retirar | C: limpar tudo | K/L: resolução | ↑ ↓: tamanho do pincel | F: tela cheia"}
    iframeSource={"/falling_sand_v1.html"}
    iframeTitle={"falling_sand"}
/>
