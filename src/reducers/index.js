import {combineReducers} from "redux";
import decks from "./decks_reducer";
import activeDeckId from "./setActiveDeck_reducer";
import score from './score_reducer';

const rootReducer = combineReducers({
    decks: decks,
    activeDeckId: activeDeckId,
    currentScore: score
});

export default rootReducer;
