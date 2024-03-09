<script lang="ts">
    export let title = "";
    export let accentColor = "black";
    export let width = ""
</script>

<div class="main_sect" style:box-shadow={`7px 7px ${accentColor}`} style:width={width}>
    {#if title}
        <h2 class="title">{title}</h2>
    {/if}
    <slot />
</div>

<style>
    .main_sect {
        border: 4px solid black;
        padding: 10px 20px;
        margin: 15px;
    }

    .main_sect .title {
        text-align: center;
        font-weight: bolder;
        font-size: larger;
        text-decoration: underline;
    }

    
    @media only screen and (max-width: 768px) {
        .main_sect {
        padding: 8px 12px;
            margin: 10px;
        }
    }
</style>
