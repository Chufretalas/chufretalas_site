<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";
    import Arrow from "$lib/components/quicktimer/Arrow.svelte";
    import {
        ArrowDirection,
        ArrowState,
        GameState,
        type IArrowThingy,
    } from "$lib/types/quicktimer";
    import { fade } from "svelte/transition";
    import { t } from "$langs/stores";

    let animation = $state<number>(0);

    let targetIdx = 0;

    let startTime = 0;

    let endTime = $state(0);

    let canRestart = $state(true);

    let gameState: GameState = $state(GameState.preGame);

    let arrowThings: IArrowThingy[] = $state([]);

    let buttonsBuffer = {
        // here I am going to consider the arrows and the buttons as the same thing
        left: false,
        right: false,
        up: false,
        down: false,
    };

    let testerIndicators = $state({
        left: false,
        right: false,
        up: false,
        down: false,
    });

    function startGame() {
        const things: IArrowThingy[] = [];
        for (let i = 0; i < 6; i++) {
            const direction = [
                ArrowDirection.left,
                ArrowDirection.right,
                ArrowDirection.up,
                ArrowDirection.down,
            ][Math.floor(Math.random() * 4)];
            things.push({
                direction: direction as ArrowDirection,
                state: ArrowState.neutral,
            });
        }
        arrowThings = things;
        targetIdx = 0;
        gameState = GameState.ready;
        canRestart = false;
        setTimeout(
            () => {
                gameState = GameState.inGame;
                startTime = Date.now();
            },
            Math.floor(Math.random() * 4000) + 2000,
        );
    }

    function pressed(direction: ArrowDirection) {
        let directionStr: "left" | "right" | "up" | "down" = "up";
        switch (direction) {
            case ArrowDirection.left:
                directionStr = "left";
                break;
            case ArrowDirection.right:
                directionStr = "right";
                break;
            case ArrowDirection.up:
                directionStr = "up";
                break;
            case ArrowDirection.down:
                directionStr = "down";
                break;
        }
        testerIndicators[directionStr] = true;
        setTimeout(() => {
            testerIndicators[directionStr] = false;
        }, 150);

        if (gameState === GameState.inGame) {
            if (arrowThings[targetIdx].direction === direction) {
                arrowThings[targetIdx].state = ArrowState.correct;
                if (targetIdx === arrowThings.length - 1) {
                    gameState = GameState.won;
                    endTime = Date.now() - startTime;
                    setTimeout(() => {
                        canRestart = true;
                    }, 1000);
                }
            } else {
                arrowThings[targetIdx].state = ArrowState.wrong;
                gameState = GameState.lost;
                setTimeout(() => {
                    canRestart = true;
                }, 1500);
            }
            targetIdx++;
            arrowThings = arrowThings;
        }
    }

    function keyboardHandler(e: KeyboardEvent) {
        if (e.code === "ArrowLeft") {
            e.preventDefault();
            pressed(ArrowDirection.left);
        }
        if (e.code === "ArrowRight") {
            e.preventDefault();
            pressed(ArrowDirection.right);
        }
        if (e.code === "ArrowUp") {
            e.preventDefault();
            pressed(ArrowDirection.up);
        }
        if (e.code === "ArrowDown") {
            e.preventDefault();
            pressed(ArrowDirection.down);
        }

        if (e.code === "Space") {
            e.preventDefault();
            startGame();
        }
    }

    function loop() {
        const gamepads = navigator.getGamepads();
        if (!gamepads) {
            return;
        }

        const gp = gamepads[0]!;
        // controller mapping https://w3c.github.io/gamepad/#
        let leftPressed = gp.buttons[2].pressed || gp.buttons[14].pressed;
        let rightPressed = gp.buttons[1].pressed || gp.buttons[15].pressed;
        let upPressed = gp.buttons[3].pressed || gp.buttons[12].pressed;
        let downPressed = gp.buttons[0].pressed || gp.buttons[13].pressed;

        if (!buttonsBuffer.left && leftPressed) {
            pressed(ArrowDirection.left);
        }
        if (!buttonsBuffer.right && rightPressed) {
            pressed(ArrowDirection.right);
        }
        if (!buttonsBuffer.up && upPressed) {
            pressed(ArrowDirection.up);
        }
        if (!buttonsBuffer.down && downPressed) {
            pressed(ArrowDirection.down);
            if (canRestart) {
                startGame();
            }
        }

        buttonsBuffer.left = leftPressed;
        buttonsBuffer.right = rightPressed;
        buttonsBuffer.up = upPressed;
        buttonsBuffer.down = downPressed;

        animation = requestAnimationFrame(loop);
    }
</script>

<svelte:head>
    <title>{$t("games.page_title")} - Quicktimer</title>
</svelte:head>

<svelte:window
    ongamepadconnected={loop}
    ongamepaddisconnected={() => cancelAnimationFrame(animation)}
    onkeydown={keyboardHandler}
/>

<main>
    <CoolBox title="Quicktimer" accentColor="#fcdf03">
        <section class="intro_and_tester">
            <p>
                Press space or down on a controller and try to complete the
                sequence as fast as you can!
            </p>
            <p>
                This accepts the arrow keys and both the dpad and main buttons
                from a controller as input. Use this tester below to check
            </p>
            <div class="tester_wrapper">
                <span class:pressed={testerIndicators.left} class="tester"
                    >🡸</span
                >
                <span class:pressed={testerIndicators.right} class="tester"
                    >🡺</span
                >
                <span class:pressed={testerIndicators.up} class="tester">🡹</span
                >
                <span class:pressed={testerIndicators.down} class="tester"
                    >🡻</span
                >
            </div>
        </section>
        <hr />
        <section class="game">
            {#if gameState === GameState.preGame}
                <span class="pregame_msg"
                    >Press space or the down controller button to start</span
                >
            {/if}

            {#if gameState === GameState.ready}
                <span class="ready_msg">Ready!</span>
            {/if}

            {#if gameState === GameState.inGame || gameState === GameState.lost || gameState === GameState.won}
                <div class="arrows_wrapper">
                    {#each arrowThings as thingy}
                        <Arrow info={thingy} />
                    {/each}
                </div>
            {/if}

            {#if gameState === GameState.won}
                <span class="time_msg">Your time: {endTime} ms</span>
            {/if}

            {#if gameState === GameState.lost}
                <span class="lost_msg">You lost 🥺</span>
            {/if}

            {#if (gameState === GameState.lost || gameState === GameState.won) && canRestart}
                <span transition:fade class="restart_msg"
                    >Press space or down on the controller to restart</span
                >
            {/if}
        </section>
    </CoolBox>
</main>

<style>
    .intro_and_tester {
        padding-top: 10px;
    }

    .intro_and_tester p {
        text-align: center;
        margin-bottom: 5px;
    }

    .tester_wrapper,
    .arrows_wrapper {
        display: flex;
        justify-content: center;
        column-gap: 10px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    .tester {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 3px solid black;
        font-size: 1.5rem;
        width: 1.7rem;
        height: 1.7rem;
        font-weight: 600;
        padding: 5px;
        border-radius: 9999999px;
        background-color: white;
    }

    .pressed {
        color: white;
        border-color: white;
        background-color: black;
        transition: all 50ms;
    }

    .game {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 60vh;
        row-gap: 30px;
    }

    .pregame_msg,
    .restart_msg {
        font-size: large;
        font-weight: bold;
        text-decoration: underline;
    }

    .ready_msg {
        font-size: 5rem;
        color: white;
        background-color: rgb(227, 0, 0);
        padding: 2rem;
        border-radius: 20px;
    }

    .time_msg,
    .lost_msg {
        font-size: large;
        font-weight: bolder;
    }
</style>
