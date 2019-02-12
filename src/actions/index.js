import { DECK_SELECTED, SET_SCORE } from "../actions/types";

export function setScore(newScore) {
    return {
        type: SET_SCORE,
        payload: newScore
    };
}

export function setActiveDeck(id) {
    return {
        type: DECK_SELECTED,
        payload: id

    };
}

