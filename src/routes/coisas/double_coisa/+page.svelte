<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import Navbar from "$lib/components/Navbar.svelte";
    import matrix2DToString from "$lib/utils/matrix2DToString";
    import range from "$lib/utils/range";
    import { onMount } from "svelte";

    const searchParams = new URLSearchParams($page.url.searchParams);

    let isMounted = false;

    onMount(() => (isMounted = true));

    let formRounds: number;
    let formNPlayers: number;

    let rounds: number = 10;
    let nPlayers: number = 5;

    let players: string[];
    let scores: number[][];

    $: players = new Array<string>(rounds).fill("");

    $: scores = new Array(nPlayers)
        .fill(undefined)
        .map(() => new Array(rounds));

    $: {
        rounds;
        nPlayers;
        players;
        scores;
        saveToURL();

        console.log(matrix2DToString(scores));
    }

    

    function saveToURL() {
        searchParams.set("rounds", rounds.toString());
        searchParams.set("nPlayers", nPlayers.toString());
        searchParams.set(
            "players",
            players.reduce((acc, crr) => acc + ";" + crr, "").slice(1),
        );
        searchParams.set(
            "scores",
            matrix2DToString(scores)
        );
        if (isMounted) {
            goto($page.url.pathname + "?" + searchParams.toString(), {
                keepFocus: true,
            });
        }
    }

    //TODO: add a final result column at the end
    //TODO: make it decent to look at
    //TODO: load the data from the url on mount
    //TODO: add a reset button
</script>

<Navbar />
<main>
    <form
        on:submit={(e) => {
            if (
                confirm(
                    "Isso deletará todos os dados atuais na tabela.\nVocê tem certeza que quer continuar?",
                )
            ) {
                if (formNPlayers !== nPlayers || formRounds !== rounds) {
                    nPlayers = formNPlayers;
                    rounds = formRounds;
                    saveToURL();
                }
            }
        }}
    >
        <fieldset>
            <label for="rounds">Rodadas</label>
            <input
                type="number"
                name="rounds"
                id="rounds"
                min="0"
                step="1"
                bind:value={formRounds}
            />
        </fieldset>
        <fieldset>
            <label for="n_players">Jogadores</label>
            <input
                type="number"
                name="n_players"
                id="n_players"
                min="0"
                step="1"
                bind:value={formNPlayers}
            />
        </fieldset>
        <button type="submit">Confimar</button>
    </form>
    <button on:click={() => console.log(scores)}>Aquiiiiiiiiiiiiii</button>
    <table id="scores_table">
        <thead>
            <tr>
                <th></th>
                {#each range(1, rounds + 1) as roundNumber}
                    <th>Round {roundNumber}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each range(0, nPlayers) as vidx}
                <tr>
                    {#each range(-1, rounds) as hidx}
                        {#if hidx == -1}
                            <td
                                ><input
                                    type="text"
                                    bind:value={players[vidx]}
                                    placeholder={`Jogador ${vidx + 1}`}
                                />
                                {`${vidx} ${hidx}`}
                            </td>
                        {:else}
                            <td
                                ><input
                                    type="number"
                                    min="0"
                                    step="1"
                                    bind:value={scores[vidx][hidx]}
                                    placeholder={`Rodada ${hidx}`}
                                    id={`${vidx} ${hidx}`}
                                />
                                {`${vidx} ${hidx}`}
                            </td>
                        {/if}
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</main>

<style>
    main {
        width: 100vw;
        margin: 0 auto;
    }

    #scores_table {
        display: block;
        max-width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
    }
</style>
