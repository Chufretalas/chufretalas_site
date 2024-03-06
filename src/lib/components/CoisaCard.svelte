<script lang="ts">
    import CoolBox from "./CoolBox.svelte";
    export let accentColor = "black"
    export let title: string;
    export let description: string;
    export let link: string;
</script>

<div class="coisa_card">
    <CoolBox accentColor={accentColor}>
        <div class="coisa_inner_wrapper">
            <span class="coisa_title">{title}</span>
            <p>
                {description}
            </p>
            <a class="coisa_link" href={link}>Ver a coisa</a>
        </div>
    </CoolBox>
</div>

<style>
    .coisa_card {
        width: 400px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .coisa_title {
        display: block;
        text-align: center;
        margin: 10px 0;
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
