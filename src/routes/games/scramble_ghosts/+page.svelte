<script lang="ts">
    import EbitengineGame from "$lib/components/EbitengineGame.svelte";
    import LL from "$i18n/i18n-svelte";
</script>

<svelte:head>
    <title>{$LL.games.page_title()} - Scramble Ghosts</title>
</svelte:head>

<EbitengineGame
    title={"Scramble Ghosts v0.4.0"}
    instructions={"WASD: mover | ← →: mirar | espaço: aceitar | P: debug | F: tela cheia"}
    iframeSource={"/scramble_ghosts.html"}
    iframeTitle={"scramble_ghosts"}
/>
