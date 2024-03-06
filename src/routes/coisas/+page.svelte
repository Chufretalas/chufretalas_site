<script lang="ts">
    import CoisaCard from "$lib/components/CoisaCard.svelte";
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
                <CoisaCard
                    title="Double Coisa"
                    description="Um tabela para contar os pontos do jogo double 9, double 12, ou
                                o double que for."
                    link="/coisas/double_coisa"
                    accentColor="#f8ce7f"
                />
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
