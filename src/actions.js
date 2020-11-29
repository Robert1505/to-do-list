export const addGoal = (name, id) => {
    return {
        type: "ADD_GOAL",
        payload: {
            name, id
        }
    }
}

export const deleteGoal = (id) => {
    return{
        type: "DELETE_GOAL",
        payload: {
            id
        }
    }
}

export const completeGoal = (id) => {
    return {
        type: "COMPLETE_GOAL",
        payload: {
            id
        }
    }
}

export const unverifyGoal = (id) => {
    return {
        type: "UNVERIFY_GOAL",
        payload: {id}
    }
}

export const swap = (poz1, poz2) => {
    return {
        type: "SWAP",
        payload: {
            poz1, poz2
        }
    }
}