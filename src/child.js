import React, {useContext} from 'react'
import CounterContext from './CounterContext'

const Child = () => {

    let counterValue = useContext(CounterContext)

    return (
        <div>
            <h3>This is first Child</h3>
            <h4>Counter Value is : {counterValue[0]} </h4>

            <button onClick={()=>{counterValue[1](++counterValue[0])}}>
                Update
            </button>
        </div>
    )

}

export default Child