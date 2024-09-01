<script lang="ts">
    import CoolBox from "$lib/components/CoolBox.svelte";

    let animation: number;

    let buttonsBuffer = {
        // here I am going to consider the arrows and the buttons as the same thing
        left: false,
        right: false,
        up: false,
        down: false,
    };

    let testerIndicators = {
        left: false,
        right: false,
        up: false,
        down: false,
    };

    function pressed(direction: "left" | "right" | "up" | "down") {
        testerIndicators[direction] = true;
        setTimeout(() => {
            testerIndicators[direction] = false;
        }, 150);
    }

    function keyboardHandler(e: KeyboardEvent) {
        if (e.code === "ArrowLeft") {
            e.preventDefault();
            pressed("left");
        }
        if (e.code === "ArrowRight") {
            e.preventDefault();
            pressed("right");
        }
        if (e.code === "ArrowUp") {
            e.preventDefault();
            pressed("up");
        }
        if (e.code === "ArrowDown") {
            e.preventDefault();
            pressed("down");
        }

        if (e.code === "Space") {
            e.preventDefault();
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
            pressed("left");
        }
        if (!buttonsBuffer.right && rightPressed) {
            pressed("right");
        }
        if (!buttonsBuffer.up && upPressed) {
            pressed("up");
        }
        if (!buttonsBuffer.down && downPressed) {
            pressed("down");
        }

        buttonsBuffer.left = leftPressed;
        buttonsBuffer.right = rightPressed;
        buttonsBuffer.up = upPressed;
        buttonsBuffer.down = downPressed;

        animation = requestAnimationFrame(loop);
    }
</script>

<svelte:window
    on:gamepadconnected={loop}
    on:gamepaddisconnected={() => cancelAnimationFrame(animation)}
    on:keydown={keyboardHandler}
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
                    >🡐</span
                >
                <span class:pressed={testerIndicators.right} class="tester"
                    >🡒</span
                >
                <span class:pressed={testerIndicators.up} class="tester">🡑</span
                >
                <span class:pressed={testerIndicators.down} class="tester"
                    >🡓</span
                >
            </div>
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

    .tester_wrapper {
        display: flex;
        justify-content: center;
        column-gap: 4px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    .tester {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 3px solid black;
        font-size: 1.8rem;
        width: 1.7rem;
        height: 1.7rem;
        font-weight: 900;
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
</style>
