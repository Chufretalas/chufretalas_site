<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";
</script>

<main>
    <CoolBox title="Scramble Ghosts v0.4.0 (web)">
        <div id="inner_wrapper">
            <span id="instructions"
                >WASD: mover | ← →: mirar | espaço: aceitar | P: debug | F: tela
                cheia</span
            >
            <iframe
                src="/scramble_ghosts.html"
                frameborder={0}
                title="scramble_ghosts"
                id="game"
                scrolling="no"
            ></iframe>
            <span id="phone_warning">Isso só funciona em um computador ☹️</span>
        </div>
    </CoolBox>
</main>

<style>
    main {
        width: 90%;
        margin: 0 auto;
    }

    #inner_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #instructions {
        text-align: center;
        margin-bottom: 10px;
        margin-top: 12px;
        font-weight: bolder;
    }

    #game {
        height: 90vh;
        aspect-ratio: 16/ 9;
    }

    #phone_warning {
        margin: auto;
        text-align: center;
        vertical-align: middle;
    }

    @media only screen and (min-width: 768px) {
        #phone_warning {
            display: none;
        }
    }

    @media only screen and (max-width: 768px) {
        #instructions,
        #game {
            display: none;
        }

        #inner_wrapper {
            align-items: center;
            height: 50vh;
        }
    }
</style>
