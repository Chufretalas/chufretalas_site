<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";
    let loaded = $state(false);
    let {
        title,
        instructions,
        iframeSource,
        iframeTitle = "",
    }: {
        title: string;
        instructions: string;
        iframeSource: string;
        iframeTitle?: string;
    } = $props();
</script>

<main>
    <CoolBox {title}>
        <div id="inner_wrapper">
            <span id="instructions"
                >{instructions}</span
            >
            <span class:hidden={loaded} class="loading_span">Carregando...</span
            >
            <iframe
                src={iframeSource}
                frameborder={0}
                title={iframeTitle}
                id="game"
                scrolling="no"
                onload={() => (loaded = true)}
                class:hidden={!loaded}
            ></iframe>
            <span id="phone_warning">Isso só funciona em um computador ☹️</span>
        </div>
    </CoolBox>
</main>

<style>
    .hidden {
        display: none;
    }

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

    #phone_warning,
    .loading_span {
        margin: auto;
        text-align: center;
        vertical-align: middle;
    }

    .loading_span {
        font-size: 1.5rem;
        margin: 100px auto;
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
