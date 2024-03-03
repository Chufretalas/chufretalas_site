<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import matrix2DToString from "$lib/utils/matrix2DToString";
    import range from "$lib/utils/range";
    import { onMount } from "svelte";

    const searchParams = new URLSearchParams($page.url.searchParams);

    let isMounted = false;

    let formRounds: number;
    let formNPlayers: number;

    let rounds: number = 10;
    let nPlayers: number = 6;

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

            scores = newScores;
        }

        isMounted = true;
    });

    //TODO: make an indication to whoever is winning
    //TODO: show a leaderboard when all scores are filled

    //TODO: make a /coisas page and show this thing
</script>

<svelte:head>
    <title>Chufretalas - Double Coisa</title>
</svelte:head>

<main>
    <div id="title">
        <h1>Double Coisa</h1>
        <span>Marcador de pontos para o jogo double 9, 12 e qualquer outra versão</span>
    </div>
    <form
        id="config_form"
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
        <h2>⚙ Configure o Jogo 🛠</h2>
        <div class="inputs">
            <fieldset>
                <label for="rounds">Rodadas</label>
                <input
                    type="number"
                    name="rounds"
                    id="rounds"
                    placeholder="..."
                    required
                    min="1"
                    step="1"
                    bind:value={formRounds}
                />
                <span>Atual: {rounds}</span>
            </fieldset>
            <fieldset>
                <label for="n_players">Jogadores</label>
                <input
                    type="number"
                    name="n_players"
                    id="n_players"
                    placeholder="..."
                    required
                    min="1"
                    step="1"
                    bind:value={formNPlayers}
                />
                <span>Atual: {nPlayers}</span>
            </fieldset>
        </div>
        <button type="submit">Confimar</button>
    </form>
    <table id="scores_table">
        <thead>
            <tr>
                <th>Jogadores</th>
                {#each range(1, rounds + 1) as roundNumber}
                    <th>Rodada {roundNumber}</th>
                {/each}
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {#each range(0, nPlayers) as vidx}
                <tr
                    style:filter={`hue-rotate(${Math.random() * 20 + vidx * 77}deg)`}
                >
                    <td>
                        <div>
                            <input
                                class="name_input"
                                type="text"
                                bind:value={players[vidx]}
                                placeholder={`Jogador ${vidx + 1}`}
                            />
                        </div>
                    </td>
                    {#each range(0, rounds) as hidx}
                        <td>
                            <div>
                                <input
                                    type="number"
                                    min="0"
                                    step="1"
                                    bind:value={scores[vidx][hidx]}
                                    placeholder={players[vidx]}
                                    id={`${vidx} ${hidx}`}
                                />
                            </div>
                        </td>
                    {/each}
                    <td>
                        <div>
                            <input
                                type="number"
                                disabled
                                value={scores[vidx].reduce(
                                    (acc, crr) => acc + crr,
                                    0,
                                )}
                                placeholder={`Jogador ${vidx + 1}`}
                            />
                        </div>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>

    <button
        id="clear_all_button"
        on:click={() => {
            if (confirm("Deseja mesmo limpar todos os dados?")) {
                players = new Array(nPlayers).fill("");
                scores = new Array(nPlayers)
                    .fill(undefined)
                    .map(() => new Array(rounds));
                saveToURL();
            }
        }}>Limpar Tudo</button
    >
</main>

<style>

    #title {
        text-align: center;
        margin-top: 10px;
    }

    #title h1 {
        font-weight: bolder;
        font-size: 1.5rem;
    }

    #title span {
        font-size: 0.9em;
    }

    button {
        cursor: pointer;
        background-color: white;
        border-radius: 9999px;
        border-style: solid;
        padding: 8px;
        font-size: 1rem;
        font-weight: bold;
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.473));
        transition: all 200ms;
    }

    button:hover {
        background-color: black;
        color: white;
    }

    main {
        width: 100vw;
        margin: 0 auto;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
    }

    #config_form {
        background-color: #f8ce7f;
        width: 40%;
        margin: 15px auto;
        padding: 10px;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
    }

    #config_form h2 {
        font-weight: bold;
        text-decoration: underline;
        font-size: 1.22rem;
        margin-bottom: 3px;
    }

    #config_form .inputs {
        width: 60%;
        display: flex;
        justify-content: space-around;
    }

    #config_form fieldset {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #config_form label {
        font-size: 1.2rem;
        margin-bottom: 3px;
        font-weight: bold;
    }

    #config_form input {
        width: 6rem;
        height: 1.8rem;
        border: none;
        border-radius: 20px;
        text-align: center;
        font-size: 1.1rem;
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.473));
    }

    #config_form span {
        margin-top: 5px;
        font-size: small;
    }

    
    @media only screen and (max-width: 768px) {
        #config_form {
            width: 90%;
        }

        #config_form .inputs {
            width: 80%;
        }
    }

    /* Table styles */

    #scores_table {
        display: block;
        width: fit-content;
        max-width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        margin: auto;
        margin-top: 30px;
        padding: 0 15px;
    }

    thead {
        background-color: #f8ce7f;
    }

    thead tr th:first-child {
        border-top-left-radius: 10px;
        border-left: none;
        border-right: black solid 2px;
    }

    thead tr th:last-child {
        border-top-right-radius: 10px;
        border-left: black solid 2px;
        border-right: none;
    }

    td:first-child {
        border-left: none;
        border-right: black solid 2px;
    }

    td:last-child {
        border-left: black solid 2px;
        border-right: none;
    }

    td,
    th {
        border-left: black solid 2px;
        border-right: black solid 2px;
        width: 125px;
        min-width: 125px;
    }

    td div {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    tbody tr {
        height: 40px;
        background-color: #a3d6b4;
    }

    thead tr th {
        padding: 3px;
        font-weight: 700;
    }

    td input::placeholder {
        font-size: 0.8rem;
    }

    td input {
        width: 90px;
        height: 25px;
        border: none;
        border-radius: 9999px;
        background-color: white;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.473));
    }

    td input.name_input {
        width: 110px;
        font-size: 0.9rem;
    }

    /* End Table styles */

    #clear_all_button {
        display: block;
        margin: auto;
        margin-top: 25px;
    }
</style>
