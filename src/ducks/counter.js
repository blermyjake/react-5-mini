const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action creator
export function increment(amt){
    return{
        type: INCREMENT,
        payload: amt
    };
}

export function decrement(amt){
    return{
        type: DECREMENT,
        payload: amt
    };
}

//initial state
const initialState = {
	currentValue: 0
};

// reducer

export default function counter(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return{
                // ...state means grab all the state values
                ...state,
                currentValue: state.currentValue + action.payload
            };
            case DECREMENT:
            return {
                ...state,
                currentValue: state.currentValue - action.payload
            };
    
    default:
        return state;
    
    }
}
