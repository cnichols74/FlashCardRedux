import {DECK_SELECTED} from '../actions/types';

export default function (state = 0, action) {

    switch (action.type) {

        case DECK_SELECTED:
            return action.payload;

        default:
            return state;
    }
}