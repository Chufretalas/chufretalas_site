<script lang="ts">
    import { SvelteMap } from "svelte/reactivity";
    import LetterCard from "$lib/components/letter_coisa/LetterCard.svelte";

    let pickedLetter = $state("");

    let autoRemove = $state(false);

    let removeActive = $state(false);

    let available = $state(
        new SvelteMap([
            ["A", 2],
            ["B", 2],
            ["C", 2],
            ["D", 2],
            ["E", 2],
            ["F", 2],
            ["G", 2],
            ["H", 2],
            ["I", 2],
            ["J", 2],
            ["K", 2],
            ["L", 2],
            ["M", 2],
            ["N", 2],
            ["O", 2],
            ["P", 2],
            ["Q", 2],
            ["R", 2],
            ["S", 2],
            ["T", 2],
            ["U", 2],
            ["V", 2],
            ["W", 2],
            ["X", 2],
            ["Y", 2],
            ["Z", 2],
        ]),
    );

    let graveyard = $state<SvelteMap<string, number>>(new SvelteMap());

    function getSortedLetterArray(
        letterMap: SvelteMap<string, number>,
    ): [string, number][] {
        return Array.from(letterMap.entries()).sort(
            ([letterA, probA], [letterB, probB]) =>
                letterA == letterB ? 0 : letterA < letterB ? -1 : 1,
        ) as [string, number][];
    }

    function pickLetter() {
        if (available.size === 0) {
            pickedLetter = "";
            return;
        }
        let pool: string[] = [];
        available.forEach((prob, letter) => {
            for (let i = 0; i < prob; i++) {
                pool.push(letter);
            }
        });
        pickedLetter = pool[Math.floor(Math.random() * pool.length)];
        if (autoRemove) {
            const prob = available.get(pickedLetter) ?? 2;
            graveyard.set(pickedLetter, prob);
            graveyard = graveyard;
            console.log(graveyard);
            available.delete(pickedLetter);
            available = available;
        }
    }

    $effect(() => {
        console.log(graveyard);
    });
</script>

<svelte:head>
    <title>Chufretalas - Letter Coisa</title>
</svelte:head>

<main>
    <div id="title">
        <h1>Letter Coisa</h1>
        <span
            >Um sorteador de letra aleatória robusto e simples de usar. Use os
            botões de + e - para editar as probabilidades de cada letra, quanto
            mais bolinhas amarelas, mais provável é a letra.</span
        >
    </div>
    <section class="main_section">
        <fieldset id="auto_remove_fieldset">
            <label for="auto_remove_input">Remover letras automaticamente</label
            >
            <input
                type="checkbox"
                name="auto_remove_input"
                id="auto_remove_input"
                bind:checked={autoRemove}
            />
        </fieldset>
        <div id="picked_letter">
            {pickedLetter === "" ? "?" : (pickedLetter ?? "?")}
        </div>
        <button onclick={pickLetter} id="picker_button">Sortear!</button>
    </section>
    <hr />
    <section class="available_section">
        <h2>Letras disponíveis para sorteio</h2>
        <fieldset id="remove_active_fieldset">
            <label for="remove_active_input"
                >Alternar entre remover letras e editar probabilidades</label
            >
            <input
                type="checkbox"
                name="remove_active_input"
                id="remove_active_input"
                bind:checked={removeActive}
            />
        </fieldset>
        <ul class="letter_selection">
            {#each getSortedLetterArray(available) as [letter, prob]}
                <li>
                    <LetterCard
                        {letter}
                        {prob}
                        {removeActive}
                        onLower={() => {
                            if (prob > 1) {
                                available = available.set(letter, prob - 1);
                            }
                        }}
                        onRaise={() => {
                            if (prob < 3) {
                                available = available.set(letter, prob + 1);
                            }
                        }}
                        onRemove={() => {
                            graveyard.set(letter, prob);
                            graveyard = graveyard;
                            available.delete(letter);
                            available = available;
                        }}
                    />
                </li>
            {/each}
        </ul>
    </section>
    <hr />
    <section class="graveyard_section">
        <h2>Cemitério de letras</h2>
        <ul class="letter_selection">
            {#each getSortedLetterArray(graveyard) as [letter, prob]}
                <li>
                    <LetterCard
                        {letter}
                        {prob}
                        {removeActive}
                        isGraveyard={true}
                        onLower={() => {}}
                        onRaise={() => {}}
                        onRemove={() => {
                            available.set(letter, prob);
                            available = available;
                            graveyard.delete(letter);
                            graveyard = graveyard;
                        }}
                    />
                </li>
            {/each}
        </ul>
    </section>
</main>

<style>
    main {
        width: 80vw;
        margin: auto;
    }

    @media only screen and (max-width: 768px) {
        main {
            width: 90%;
        }
    }

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

    h2 {
        font-weight: bold;
        font-size: larger;
        text-decoration: underline;
        margin-bottom: 10px;
    }

    .main_section {
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .available_section,
    .graveyard_section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
    }

    #remove_active_fieldset {
        border: 2px solid black;
        border-radius: 10px;
        padding: 5px;
        margin: 15px auto;
    }

    #auto_remove_fieldset {
        margin-bottom: 50px;
        border: 2px solid black;
        border-radius: 10px;
        padding: 5px;
        display: flex;
        align-items: center;
    }

    #auto_remove_fieldset *:hover {
        cursor: pointer;
    }

    #picked_letter {
        font-size: 7rem;
        font-weight: bolder;
        padding: 30px;
        border-radius: 30px;
        box-shadow: 3px 3px 6px black;
        text-align: center;
        vertical-align: middle;
        background-image: linear-gradient(rgb(87, 157, 238), rgb(38, 124, 221));
        color: white;
    }

    #picker_button {
        border: 2px solid black;
        padding: 5px 10px;
        border-radius: 10px;
        font-weight: bolder;
        font-size: 1.5rem;
        transition: all 200ms;
        margin-top: 20px;
    }

    #picker_button:hover {
        cursor: pointer;
        background-color: rgb(189, 189, 189);
    }
    #picker_button:active {
        background-color: rgb(165, 165, 165);
        color: white;
    }

    .letter_selection {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
</style>
