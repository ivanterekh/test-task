import {SET_STEP} from "../constants/actionTypes";

const initialState = {
    step: (() => {
        let step = localStorage.getItem("step");
        if (step !== null) {
            return parseInt(step);
        } else {
            return 2500;
        }
    })()
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_STEP:
            let { step } = action.payload;
            if (step < 1) {
                step = 1;
            }
            return {
                ...state,
                step: step
            };
        default:
            return state;
    }
}