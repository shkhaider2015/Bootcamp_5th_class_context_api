import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer'

const Child2 = () =>
{
    let [state, dispatch] = useReducer(CounterReducer, 0)
    console.log(state)
    return (
        <div>
            <h3>Socond Child</h3>
    <h3>Value of Reducer : {state}</h3>
    <button onClick={()=>dispatch('Update')} >Update Reducer</button>

        </div>
    )

}

export default Child2