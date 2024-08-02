<script lang="ts">
    import {t} from "$langs/stores"
</script>

<a href="/">Home</a>
<a href="/projetos">{$t("navbar.projects")}</a>
<a href="/jogos">{$t("navbar.games")}</a>
<a href="/coisas">{$t("navbar.coisas")}</a>
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
