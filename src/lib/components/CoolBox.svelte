<script lang="ts">
    export let title = "";
    export let accentColor = "black";
</script>

<div class="main_sect" style:box-shadow={`7px 7px ${accentColor}`}>
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
        font-size: large;
        text-decoration: underline;
    }
</style>
