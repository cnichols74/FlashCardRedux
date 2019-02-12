import {SET_SCORE} from "../actions/types";

export default function (state = 0, action) {
    switch (action.type) {
        case SET_SCORE:
            return action.payload;
        default:
            return state;
    }
}