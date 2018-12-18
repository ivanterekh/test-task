import {SET_STEP} from "../constants/actionTypes";

export const setStep = step => ({
    type: SET_STEP,
    payload: {
        step: step
    }
});