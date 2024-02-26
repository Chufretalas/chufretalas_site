<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import range from "$lib/utils/range";

    let rounds: number = 10;
    let nPlayers: number = 5;

    let players: string[];
    let scores: number[][];

    $: {
        players = new Array<string>(rounds).fill("");
        scores = new Array(nPlayers)
            .fill(undefined)
            .map(() => new Array(rounds));
    }
    //TODO: add a final result column at the end
    //TODO: make it decent to look at
    //TODO: make a way to save it to the url everytime the values change and only make the form change the values on submit with an alert
</script>

<Navbar />
<main>
    <form>
        <fieldset>
            <label for="rounds">Rodadas</label>
            <input
                type="number"
                name="rounds"
                id="rounds"
                bind:value={rounds}
            />
        </fieldset>
        <fieldset>
            <label for="n_players">Jogadores</label>
            <input
                type="number"
                name="n_players"
                id="n_players"
                bind:value={nPlayers}
            />
        </fieldset>
    </form>
    <button on:click={() => console.log(scores)}>Aquiiiiiiiiiiiiii</button>
    <table>
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
        width: 90%;
        margin: 0 auto;
    }
</style>
