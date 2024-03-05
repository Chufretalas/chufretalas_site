<script lang="ts">
    import { slide } from "svelte/transition";
    import NavbarLinks from "./NavbarLinks.svelte";

    let menuExpanded = false;
</script>

<nav>
    <div>
        <a href="/">
            <h1>Chufretalas</h1>
        </a>
        <span style:margin-left={"10px"}>por Marco Antonio</span>
    </div>
    <div class="navigation_buttons only_on_computer" transition:slide>
        <NavbarLinks />
    </div>
    {#if menuExpanded}
        <div class="navigation_buttons only_on_mobile" transition:slide>
            <NavbarLinks />
        </div>
    {/if}
    <button
        class="expand_button only_on_mobile"
        class:reverse_column={menuExpanded}
        on:click={() => (menuExpanded = !menuExpanded)}
    >
        <span>Menu</span>
        <span>{menuExpanded ? "︿" : "﹀"}</span>
    </button>
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

    .expand_button {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        background: none;
        border: none;
        color: white;
        font-weight: bolder;
    }

    .reverse_column {
        flex-direction: column-reverse;
    }

    @media only screen and (min-width: 768px) {
        .only_on_mobile {
            display: none;
        }
    }

    @media only screen and (max-width: 768px) {
        nav {
            flex-direction: column;
            row-gap: 10px;
        }

        .navigation_buttons {
            flex-direction: column;
            align-items: center;
            row-gap: 15px;
            flex-wrap: nowrap;
        }

        .navigation_buttons::before {
            content: none;
        }

        .only_on_computer {
            display: none;
        }
    }
</style>
