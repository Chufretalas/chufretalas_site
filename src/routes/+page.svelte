<script>
    import BasicSection from "$lib/components/CoolBox.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import VeryNiceLookingButton from "$lib/components/VeryNiceLookingButton.svelte";
    import GithubLogo from "$lib/components/svgs/GithubLogo.svelte";
    import LinkedInLogo from "$lib/components/svgs/LinkedInLogo.svelte";
</script>

<nav>
    <div>
        <h1>Chufretalas</h1>
        <span>por Marco Antonio</span>
    </div>
</nav>
<main>
    <section class="section_left">
        <VeryNiceLookingButton
            accentColor="#39d353"
            url="https://github.com/Chufretalas"
        >
            <GithubLogo />
            <span>Github</span>
        </VeryNiceLookingButton>
        <VeryNiceLookingButton
            accentColor="#0a66c2"
            url="https://www.linkedin.com/in/marco-benevenuto"
        >
            <LinkedInLogo />
            <span>LinkedIn</span>
        </VeryNiceLookingButton>
    </section>
    <section class="section_middle">
        <BasicSection title="Sobre mim" accentColor="#bdf5ac">
            <div class="section_content">
                <div class="section_text">
                    <p>
                        Meu nome é Marco Antonio Benevenuto de Oliveira. Sou um
                        programador brasileiro que ama se desafiar e resolver
                        problemas, desde de arrumar algum CSS quebrado no
                        frontend até aprender assembly RISC-V para usar uma
                        plaquinha chinesa quase sem documentação.
                    </p>
                    <p>
                        Sou técnico em eletrônica formado pelo IFSP em 2021,
                        sendo que atualmente estou no meu segundo ano na UFABC
                        em busca do meu diploma de bachrelado em ciência da
                        computação.
                    </p>
                    <p>
                        Por conta da pandemia, fiquei de janeiro de 2022 até
                        setembro com tempo livre antes da faculdade iniciar as
                        aula. Foi esse tempo que usei para estudar o máximo que
                        podia sobre desenvolvimento. Estudei Java, Kotlin, Dart
                        (Flutter), Python, Javascript, HTML, CSS e tudo mais o
                        que pude. Dessa forma, mesmo depois de começarem as
                        atividades da faculdade eu continuei me esforçando ao
                        máximo, estudando e fazendo diversos projetos.
                    </p>
                </div>
                <div class="section_img">
                    <img
                        src="https://avatars.githubusercontent.com/u/101844490?v=4"
                        alt=""
                    />
                    <span>Minha mais bela criação, o Cãovo</span>
                </div>
            </div>
        </BasicSection>
        <BasicSection title="Meus projetos" accentColor="#ff3e00">
            <ProjectCard>

            </ProjectCard>
        </BasicSection>
    </section>
    <section class="section_right"></section>
</main>

<style>
    nav {
        background-color: black;
        color: white;
        padding: 5px;
    }

    nav h1 {
        font-weight: bold;
        font-size: 2rem;
    }
    nav span {
        margin-left: 10px;
    }

    main {
        display: grid;
        grid-template-columns: 1fr 6fr 1fr;
        margin: 0 auto;
        margin-top: 20px;
    }

    .section_content {
        display: flex;
        margin-top: 20px;
    }

    .section_text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 12px;
    }
    .section_img img {
        max-width: 230px;
        border-radius: 999999999px;
    }
    .section_img span {
        font-size: small;
    }
</style>
