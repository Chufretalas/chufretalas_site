<script lang="ts">
    import LL from "$i18n/i18n-svelte";
</script>

<a href="/">Home</a>
<a href="/projetos">{$LL.navbar.projects()}</a>
<a href="/games">{$LL.navbar.games()}</a>
<a href="/coisas">{$LL.navbar.coisas()}</a>
<a href="https://github.com/Chufretalas" target="_blank">Github</a>
<a href="https://www.linkedin.com/in/marco-benevenuto" target="_blank"
    >LinkedIn</a
>

<style>
    a {
        color: white;
        text-decoration: underline;
        transition: all 200ms;
    }

    a:hover {
        color: blue;
    }
</style>
