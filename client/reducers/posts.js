// a reducer takes two things

// 1. The action the info about what happend
// 2. Copy of current state

function posts(state = [], action){
    switch(action.type){
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1)

            ]
        default:
            return state;
    }
    console.log(state, action);
    return state;
}

export default posts;