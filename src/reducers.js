import {combineReducers} from 'redux';

const INITIAL_STATE = {
    goals : []
};

let newGoals; 

export const goalReducer = (oldState = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_GOAL":
            newGoals = [...oldState.goals];
            newGoals.push({
                name: action.payload.goal,
                completed: false,
            });
            return{
                ...oldState,
                goals: [...newGoals]
            }
        default:
            return oldState;
    }
}

export default combineReducers({
    goals: goalReducer
});

