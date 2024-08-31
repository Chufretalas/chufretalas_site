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

    let buttonIndicators = {
        left: false,
        right: false,
        up: false,
        down: false,
    };

    function pressed(direction: "left" | "right" | "up" | "down") {
        console.log(direction);
        buttonIndicators[direction] = true;
        setTimeout(() => {
            buttonIndicators[direction] = false;
        }, 100);
    }

    function loop() {
        const gamepads = navigator.getGamepads();
        if (!gamepads) {
            return;
        }

        const gp = gamepads[0]!;
        // controller mapping https://w3c.github.io/gamepad/#
        // console.log(gp.buttons[2].pressed)
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
/>

<main>
    <CoolBox title="Quicktimer" accentColor="#fcdf03">
        <div class:pressed={buttonIndicators.left}>🡐</div>
        <div class:pressed={buttonIndicators.right}>🡒</div>
        <div class:pressed={buttonIndicators.up}>🡑</div>
        <div class:pressed={buttonIndicators.down}>🡓</div>
    </CoolBox>
</main>

<style>
    .pressed {
        color: greenyellow;
        font-size: 1rem;
    }
</style>
