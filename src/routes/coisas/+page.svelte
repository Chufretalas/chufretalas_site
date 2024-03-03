<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";
</script>

<main>
    <CoolBox title="🚀 Coisas 🪑">
        <span
            >Coisas que precisavam de um lugar para morar, mas não mereciam um
            projeto separado</span
        >
        <span style:font-size="small"
            >(Não espere consistência estética entre as coisas e o resto do
            site)</span
        >
        <ul>
            <div class="projects_wrapper">
                <div class="coisa_card">
                    <CoolBox accentColor="#f8ce7f">
                        <div class="coisa_inner_wrapper">
                            <span class="coisa_title">Double Coisa</span>
                            <p>
                                Um tabela para contar os pontos do jogo double
                                9, double 12, ou o double que for.
                            </p>
                            <a class="coisa_link" href="/coisas/double_coisa"
                                >Ver a coisa</a
                            >
                        </div>
                    </CoolBox>
                </div>
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

    /* TODO: move this to components when possible */
    /* Coisa card stuff */
    .coisa_card {
        width: 400px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .coisa_title {
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
