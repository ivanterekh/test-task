import {ADD_TEXT, DELETE_TEXT} from "../constants/actionTypes";
import omit from 'lodash/omit';

const initialState = {
    texts: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TEXT: {
            const {id, content} = action.payload;
            return {
                ...state,
                texts: {
                    ...state.texts,
                    [id]: content
                }
            };
        }
        case DELETE_TEXT: {
            const {id} = action.payload;
            return {
                ...state,
                texts: omit(state.texts, id)
            };
        }
        default:
            return state;
    }
}