<script lang="ts">
    interface Props {
        url: string;
        accentColor?: string;
        children?: import('svelte').Snippet;
    }

    let { url, accentColor = "black", children }: Props = $props();
</script>

<a href={url} target="_blank" class="wrapper">
    <div class="content" style:box-shadow={`7px 7px ${accentColor}`}>
        {@render children?.()}
    </div>
</a>

<style>
    .wrapper {
        color: black;
        text-decoration: none;
        display: inline-block;
    }

    .wrapper:hover .content {
        background-color: black;
        color: white;
        fill: white;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
        width: min-content;
        border: 4px solid black;
        padding: 8px;
        margin: 12px;
        width: 80px;
        transition: all 300ms;
    }

    .wrapper:hover .content * {
        fill: white;
    }
</style>
