import { STEP_INCREMENT, STEP_DECREMENT } from '../types/index'

const initialState = {
    stepIndex: 1
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case STEP_INCREMENT:
            return { ...state, stepIndex: state.stepIndex + 1 }
        case STEP_DECREMENT:
            return { ...state, stepIndex: state.stepIndex - 1 }
        default:
            return state
    }
}

export default reducer