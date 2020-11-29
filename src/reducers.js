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
                name: action.payload.name,
                id: action.payload.id,
                completed: false,
            });
            return{
                ...oldState,
                goals: [...newGoals]
            }
        case "DELETE_GOAL":
            newGoals = [...oldState.goals];
            newGoals = newGoals.filter(goal => goal.id !== action.payload.id)
            return{
                ...oldState,
                goals: [...newGoals]
            }
        case "SWAP":
            newGoals = [...oldState.goals];
            let tmp = newGoals[action.payload.poz1];
            newGoals[action.payload.poz1] = newGoals[action.payload.poz2];
            newGoals[action.payload.poz2] = tmp;
            return {
                ...oldState,
                goals: [...newGoals]
            }
        case "COMPLETE_GOAL":
            newGoals = [...oldState.goals];
            for (let i = 0; i < newGoals.length; i++) {
                if (newGoals[i].id === action.payload.id) {
                    newGoals[i].completed = true;
                }
            }
            return {
                ...oldState,
                goals: [...newGoals]
            }
        case "UNVERIFY_GOAL":
            newGoals = [...oldState.goals];
            for (let i = 0; i < newGoals.length; i++) {
                if (newGoals[i].id === action.payload.id) {
                    newGoals[i].completed = false;
                }
            }
            return {
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

