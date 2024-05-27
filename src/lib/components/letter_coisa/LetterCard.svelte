<script lang="ts">
    export let letter: string;
    export let prob: number;
    export let removeActive: boolean;
    export let isGraveyard = false;
    export let onLower: () => void;
    export let onRaise: () => void;
    export let onRemove: () => void;
</script>

<div class="main_wrapper">
    <div class={`upper_wrapper ${isGraveyard ? "graveyard" : ""}`}>
        <div />
        <span id="letter">
            {letter}
        </span>
        <div class="prob_wrapper" style="display: {isGraveyard ? 'none' : ''};">
            <span style="color: {prob >= 3 ? '#fffc00' : '#b9b9b9'};">⬤</span>
            <span style="color: {prob >= 2 ? '#fffc00' : '#b9b9b9'};">⬤</span>
            <span style="color: {prob >= 1 ? '#fffc00' : '#b9b9b9'};">⬤</span>
        </div>
    </div>
    <div class="bottom_wrapper">
        {#if removeActive || isGraveyard}
            <button
                on:click={onRemove}
                id={isGraveyard ? "restore_button" : "remove_button"}
                >{isGraveyard ? "Restaurar Letra" : "Remover Letra"}</button
            >
        {:else}
            <button on:click={onRaise}>+</button>
            <button on:click={onLower}>-</button>
        {/if}
    </div>
</div>

<style>
    #letter {
        font-size: 2.7rem;
        font-weight: bolder;
    }

    .main_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .upper_wrapper {
        width: 4.8rem;
        height: 4.5rem;
        padding: 5px;
        background-image: linear-gradient(rgb(87, 157, 238), rgb(38, 124, 221));
        color: white;
        border-radius: 30px;
        display: grid;
        grid-template-columns: 1fr 8fr 1fr;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .graveyard {
        background-image: none;
        background-color: black;
    }

    .prob_wrapper span {
        display: block;
        font-size: smaller;
    }

    .bottom_wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 3px;
        margin-top: 4px;
    }

    .bottom_wrapper button {
        border: 2px solid black;
        width: 4.2rem;
        border-radius: 10px;
        font-weight: bolder;
        font-size: 1.5rem;
        transition: all 200ms;
    }

    .bottom_wrapper button:hover {
        cursor: pointer;
        background-color: rgb(189, 189, 189);
    }
    .bottom_wrapper button:active {
        background-color: rgb(165, 165, 165);
        color: white;
    }

    #remove_button {
        width: 4.5rem;
        font-size: small;
        text-align: center;
        background-color: rgb(105, 0, 0);
        color: white;
        transition: all 200ms;
    }

    #remove_button:hover {
        background-color: rgb(157, 2, 2);
    }

    #remove_button:active {
        background-color: rgb(179, 10, 10);
    }

    #restore_button {
        width: 5.2rem;
        font-size: small;
        text-align: center;
        background-color: rgb(18, 142, 2);
        color: white;
        transition: all 200ms;
    }

    #restore_button:hover {
        background-color: rgb(19, 92, 9);
    }

    #restore_button:active {
        background-color: rgb(13, 66, 6);
    }
</style>
