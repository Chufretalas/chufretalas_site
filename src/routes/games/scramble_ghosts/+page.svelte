<script lang="ts">
    import EbitengineGame from "$lib/components/EbitengineGame.svelte";
    import { t } from "$langs/stores";
</script>

<svelte:head>
    <title>{$t("games.page_title")} - Scramble Ghosts</title>
</svelte:head>

<EbitengineGame
    title={"Scramble Ghosts v0.4.0 (web)"}
    instructions={"WASD: mover | ← →: mirar | espaço: aceitar | P: debug | F: tela cheia"}
    iframeSource={"/scramble_ghosts.html"}
    iframeTitle={"scramble_ghosts"}
/>
