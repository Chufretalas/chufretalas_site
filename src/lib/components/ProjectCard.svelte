<script lang="ts">
    import CoolBox from "./CoolBox.svelte";
    //TODO: style this and make it dynamic
</script>

<div class="wrapper">
    <CoolBox>
        <div class="inner_wrapper">
            <span class="title">Personal site</span>
            <div class="tags_and_img">
                <ul class="tag_list">
                    <li>js</li>
                    <li>go</li>
                    <li>sql</li>
                </ul>
                <img
                    class="preview_img"
                    src="https://raw.githubusercontent.com/Chufretalas/web_speech_guessing_game_pt-br/main/game_screenshot.jpg"
                    alt=""
                />
            </div>
            <div class="external_buttons">
                <a href="https://github.com/Chufretalas/chufretalas_site" target="_blank">Repositório</a>
                <a href="/" target="_blank">Deploy</a>
            </div>
            <p class="description">
                Descrição .... muiiiito longa com algumas coisas e pah
            </p>
        </div>
    </CoolBox>
</div>

<style>
    a {
        color: black;
        text-decoration: none;
    }

    .wrapper {
        width: 350px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .inner_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 3px;
        height: 200px;
    }

    .title {
        font-weight: bold;
        font-size: 1.05rem;
    }

    .tags_and_img {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .tag_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5px;
    }

    .tag_list li {
        background-color: black;
        color: white;
        border-radius: 9999999px;
        padding: 4px 8px;
        height: fit-content;
    }

    .preview_img {
        max-width: 50%;
        max-height: 100%;
    }

    .external_buttons {
        display: flex;
        justify-content: center;
        column-gap: 10px;
    }

    .external_buttons a {
        width: 40%;
        background-color: white;
        color: black;
        border: 3px solid black;
        font-weight: bold;
        text-align: center;
        padding: 4px;
        transition: all 200ms;
    }

    .external_buttons a:hover {
        background-color: black;
        color: white;
    }

    .description {
        font-size: small;
    }
</style>
