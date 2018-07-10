const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

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

export function undo(){
    return{
        type: UNDO
    };
}

export function redo(){
    return{
        type: REDO
    };
}

//initial state
const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
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
            case UNDO:
            return {
                currentValue: state.previousValues[ 0 ],
                futureValues: [ state.currentValue, ...state.futureValues ],
                previousValues: state.previousValues.slice( 1 )
              };
            case REDO:
              return {
                currentValue: state.futureValues[ 0 ],
                futureValues: state.futureValues.slice( 1 ),
                previousValues: [ state.currentValue, ...state.previousValues ]
              };



    default:
        return state;
    
    }
}
