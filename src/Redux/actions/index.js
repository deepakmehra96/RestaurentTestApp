import { STEP_INCREMENT, STEP_DECREMENT } from '../types/index';

export const stepIncrement = data => {
    return {
        type: STEP_INCREMENT,
    }
}

export const stepDecrement = data => {
    return {
        type: STEP_DECREMENT,
    }
}
