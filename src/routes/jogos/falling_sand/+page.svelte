<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />
<main>
    <CoolBox title="Falling Sand (v1)">
        <div id="inner_wrapper">
            <span id="instructions"
                >LMB: colocar | RMB: retirar | C: limpar tudo | K/L: resolução |
                ↑ ↓: tamanho do pincel | F: tela cheia</span
            >
            <iframe
                src="/falling_sand_v1.html"
                frameborder={0}
                title="falling_sand"
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
