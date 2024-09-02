<script lang="ts">
    import {
    ArrowDirection,
        ArrowState,
        type IArrowThingy,
    } from "$lib/types/quicktimer";

    export let info: IArrowThingy;

    function getArrow(direction: ArrowDirection) {
        switch (direction) {
            case ArrowDirection.left:
                return "🡐";
            case ArrowDirection.right:
                return "🡒";
            case ArrowDirection.up:
                return "🡑";
            case ArrowDirection.down:
                return "🡓";
        }
    }

    function getColor(state: ArrowState) {
        switch (state) {
            case ArrowState.neutral:
                return "#ffffff";
            case ArrowState.correct:
                return "#49ff42";
            case ArrowState.wrong:
                return "#f0323c";
        }
    }
</script>

<span class="arrow" style:background-color={getColor(info.state)}
    >{getArrow(info.direction)}</span
>

<style>
    .arrow {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 3px solid black;
        font-size: 2.8rem;
        width: 2.8rem;
        height: 2.8rem;
        font-weight: bolder;
        padding: 5px;
        border-radius: 9999999px;
    }
</style>
