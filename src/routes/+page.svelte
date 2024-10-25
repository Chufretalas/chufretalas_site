<script>
    import CoolBox from "$lib/components/CoolBox.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import VeryNiceLookingButton from "$lib/components/VeryNiceLookingButton.svelte";
    import GithubLogo from "$lib/components/svgs/GithubLogo.svelte";
    import LinkedInLogo from "$lib/components/svgs/LinkedInLogo.svelte";
    import { PROJECTS } from "$lib/data/projects";
    import toShuffled from "$lib/utils/shuffle";
    import { t } from "$langs/stores";

    const sampleProjects = toShuffled(PROJECTS);

    let aboutReadMore = $state(false);
    //TODO: avoid loading game assets when not on a computer
    //TODO: add a <meta> tag to every page to make the SEO really powerful adn stuff https://developer.chrome.com/docs/lighthouse/seo/meta-description?utm_source=lighthouse&utm_medium=devtools&hl=pt-br
</script>

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
        <CoolBox title={$t("home.about_me.title")} accentColor="#bdf5ac">
            <div class="about_section_content">
                <div class="about_section_text">
                    <p>
                        {$t("home.about_me.p1")}
                    </p>
                    <p class:hide_show_more={!aboutReadMore}>
                        {$t("home.about_me.p2")}
                    </p>
                    <p class:hide_show_more={!aboutReadMore}>
                        {$t("home.about_me.p3")}
                    </p>
                </div>
                <div
                    class="about_section_img"
                    class:hide_show_more={!aboutReadMore}
                >
                    <img src="/profile_picture.webp" alt="minha foto" />
                    <span>{$t("home.about_me.image_description")}</span>
                </div>
                <button
                    onclick={() => (aboutReadMore = !aboutReadMore)}
                    id="about_show_more_button"
                    >{aboutReadMore
                        ? $t("home.about_me.show_less")
                        : $t("home.about_me.show_more")}</button
                >
            </div>
        </CoolBox>
        <CoolBox title={$t("home.my_projects.title")} accentColor="#39bed3">
            <div class="sample_projects_wrapper">
                <ProjectCard project={sampleProjects[0]} />
                <ProjectCard project={sampleProjects[1]} />
            </div>
            <a href="/projetos" class="bw_button"
                >{$t("home.my_projects.button")}</a
            >
        </CoolBox>
        <CoolBox title="{$t('home.other_pages.title')} 👍" accentColor="red">
            <div class="other_pages_inner_wrapper">
                <a href="/jogos" class="bw_button"
                    >🎮 {$t("home.other_pages.games_button")} 📺</a
                >
                <a href="/coisas" class="bw_button"
                    >🚀 {$t("home.other_pages.coisas_button")} 🪑</a
                >
            </div>
        </CoolBox>
    </section>
    <section class="section_right"></section>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 6fr 1fr;
        margin: 0 auto;
        margin-top: 20px;
    }

    .about_section_content {
        display: flex;
        margin-top: 20px;
    }

    .about_section_text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 12px;
    }

    .about_section_img {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 5px;
    }

    .about_section_img img {
        max-width: 200px;
        border-radius: 999999999px;
    }

    .about_section_img span {
        font-size: small;
        text-align: center;
    }

    #about_show_more_button {
        display: none;
    }

    .sample_projects_wrapper {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .bw_button {
        display: block;
        width: fit-content;
        margin: 8px auto;
        background-color: white;
        color: black;
        border: 3px solid black;
        font-weight: bold;
        font-size: large;
        text-align: center;
        text-decoration: none;
        padding: 4px 10px;
        transition: all 200ms;
    }

    .bw_button:hover {
        background-color: black;
        color: white;
    }

    .section_middle {
        display: flex;
        flex-direction: column;
    }

    .other_pages_inner_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }

    .other_pages_inner_wrapper a {
        margin: 10px;
    }

    @media only screen and (max-width: 768px) {
        main {
            display: block;
        }

        .section_left {
            display: none;
        }

        .section_right {
            display: none;
        }

        .about_section_content {
            flex-direction: column;
        }

        .about_section_img {
            margin-top: 10px;
        }

        .hide_show_more {
            display: none;
        }

        #about_show_more_button {
            display: inline-block;
            border: none;
            background: none;
            text-decoration: underline;
            margin-top: 10px;
            color: black;
            font-weight: bolder;
        }
    }
</style>
