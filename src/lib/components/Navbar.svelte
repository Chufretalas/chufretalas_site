<script lang="ts">
    //TODO: make the navbar collapsable on mobile so you can show all links without it looking horrible
</script>


<nav>
    <div>
        <a href="/">
            <h1>Chufretalas</h1>
        </a>
        <span>por Marco Antonio</span>
    </div>
    <div class="navigation_buttons">
        <a href="/">Home</a>
        <a href="/projetos">Projetos</a>
        <a href="/jogos" class="only_on_computer">Jogos</a>
        <a href="/coisas">Coisas</a>
        <a href="https://github.com/Chufretalas" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/marco-benevenuto" target="_blank"
            >LinkedIn</a
        >
    </div>
</nav>

<style>
    nav {
        display: flex;
        align-items: center;
        column-gap: 1rem;
        background-color: black;
        color: white;
        padding: 5px;
    }

    nav h1 {
        font-weight: bold;
        font-size: 2rem;
        color: white;
    }
    nav span {
        margin-left: 10px;
    }

    .navigation_buttons::before {
        content: "|";
        margin-right: 1rem;
        font-size: larger;
    }

    .navigation_buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        column-gap: 1rem;
        row-gap: 10px;
    }

    .navigation_buttons a {
        color: white;
        text-decoration: underline;
        transition: all 200ms;
    }

    .navigation_buttons a:hover {
        color: blue;
    }

    @media only screen and (max-width: 768px) {
        nav {
            flex-direction: column;
            row-gap: 10px;
        }

        .navigation_buttons::before {
            content: none;
        }

        .only_on_computer {
            display: none;
        }
    }
</style>
