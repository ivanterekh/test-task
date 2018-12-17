import {ADD_TEXT, DELETE_TEXT} from "../constants/actionTypes";

let nextId = 0;

export const addText = content => ({
    type: ADD_TEXT,
    payload: {
        id: nextId++,
        content
    }
});

export const deleteText = id => ({
    type: DELETE_TEXT,
    payload: {id}
});