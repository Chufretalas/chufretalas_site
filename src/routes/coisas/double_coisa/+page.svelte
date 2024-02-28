<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import Navbar from "$lib/components/Navbar.svelte";
    import matrix2DToString from "$lib/utils/matrix2DToString";
    import range from "$lib/utils/range";
    import { onMount } from "svelte";

    const searchParams = new URLSearchParams($page.url.searchParams);

    let isMounted = false;

    let formRounds: number;
    let formNPlayers: number;

    let rounds: number = 10;
    let nPlayers: number = 5;

    let players = new Array<string>(nPlayers).fill("");

    let scores = new Array(nPlayers)
        .fill(undefined)
        .map(() => new Array(rounds));

    $: {
        rounds;
        nPlayers;
        players;
        scores;
        saveToURL();
    }

    function saveToURL() {
        console.log("params", Array.from(searchParams.values()));
        console.log("fui chamado", isMounted);
        if (isMounted) {
            searchParams.set("rounds", rounds.toString());
            searchParams.set("nPlayers", nPlayers.toString());

            let playersString = "";

            for (let i = 0; i < players.length; i++) {
                if (i === players.length - 1) {
                    playersString += players[i];
                    break;
                }
                playersString += players[i] + ";";
            }

            searchParams.set("players", playersString);
            searchParams.set("scores", matrix2DToString(scores));
            goto($page.url.pathname + "?" + searchParams.toString(), {
                keepFocus: true,
            });
        }
    }

    onMount(() => {
        const sPRounds = searchParams.get("rounds");
        const sPNPlayers = searchParams.get("nPlayers");
        const sPPlayers = searchParams.get("players");
        const sPScores = searchParams.get("scores");

        if (sPRounds && sPNPlayers && sPPlayers && sPScores) {
            console.log({ sPRounds, sPNPlayers, sPPlayers, sPScores });
            rounds = +sPRounds;
            nPlayers = +sPNPlayers;
            players = sPPlayers.split(";");

            const newScores: any[][] = [];

            let idx = 0;
            const split = sPScores.split(";");
            for (let i = 0; i < nPlayers; i++) {
                newScores.push([]);
                for (let j = 0; j < rounds; j++) {
                    console.log(split[idx]);
                    newScores[i].push(
                        split[idx] === "<nil>" ? undefined : +split[idx],
                    );
                    idx++;
                }
            }

            console.log("new scores", newScores);

            scores = newScores;
        }

        isMounted = true;
    });

    //TODO: make it decent to look at
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
                    players = new Array(formNPlayers).fill("");
                    scores = new Array(formNPlayers)
                        .fill(undefined)
                        .map(() => new Array(formRounds));
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
                    <th>Rodada {roundNumber}</th>
                {/each}
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {#each range(0, nPlayers) as vidx}
                <tr>
                    <td
                        ><input
                            type="text"
                            bind:value={players[vidx]}
                            placeholder={`Jogador ${vidx + 1}`}
                        />
                    </td>
                    {#each range(0, rounds) as hidx}
                        <td
                            ><input
                                type="number"
                                min="0"
                                step="1"
                                bind:value={scores[vidx][hidx]}
                                placeholder={`Rodada ${hidx}`}
                                id={`${vidx} ${hidx}`}
                            />
                        </td>
                    {/each}
                    <td
                        ><input
                            type="number"
                            disabled
                            value={scores[vidx].reduce(
                                (acc, crr) => acc+ crr,
                                0,
                            )}
                            placeholder={`Jogador ${vidx + 1}`}
                        />
                    </td>
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
