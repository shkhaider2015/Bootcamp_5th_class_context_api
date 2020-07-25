import React from 'react'
import Child from './child'
import Child2 from './Child2'

const Parent = (props) => {
    return <div>
        <h3>This is Parent</h3>
        <Child />
        <Child2 />
    </div>
}

export default Parent