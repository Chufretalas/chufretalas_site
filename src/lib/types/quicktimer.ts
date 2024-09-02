export enum ArrowDirection {
    left,
    right,
    up,
    down
}

export enum ArrowState {
    neutral,
    correct,
    wrong,
}

export enum GameState {
    preGame,
    ready,
    inGame,
    lost,
    won
}

export interface IArrowThingy {
    direction: ArrowDirection
    state: ArrowState
}