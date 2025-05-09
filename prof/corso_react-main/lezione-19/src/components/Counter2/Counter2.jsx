import { useReducer, useState } from "react";

export default function Counter2() {

    const initialState = { count: 0, min: 0, max: 0 };
    const [state, dispatch] = useReducer(counterReducer, initialState);

    function counterReducer(state, action) {
        switch (action.type) {
            case 'INCREASE_COUNTER': {
                const newCount = state.count + 1;
                return {...state, count: newCount, max: Math.max(newCount, state.max)}
            }
            case 'DECREASE_COUNTER': {
                const newCount = state.count - 1;
                return { ...state, count: newCount, min: Math.min(newCount, state.min) }
            }
            case 'RESET_COUNTER': {
                return { ... state, count: 0 }
            }
            default: {
                throw new Error('action type non valida: ' + action.type);
            }
        }
    }

    return (
        <>
            <p>questo è il componente counter</p>
            <h1>{state.count}</h1>

            <button onClick={()=> dispatch({type: 'DECREASE_COUNTER'})}>-</button>
            <button onClick={()=> dispatch({type: 'INCREASE_COUNTER'})}>+</button>
            <button onClick={()=> dispatch({type: 'RESET_COUNTER'})}>🗑️reset</button>

            <hr />
            <p>max: {state.max}</p>
            <p>min: {state.min}</p>

        </>
    )
}
