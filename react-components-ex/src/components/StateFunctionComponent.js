import React,{useState} from 'react'

function StateFunctionalComponent() {
    const [counter,updateCount] = useState(0)
   const setCount = ()=>{
       updateCount(counter+1)
       
    }
    return (
        <div>
            <button onClick={setCount}>Count</button>
    <label>{counter}</label>
        </div>
    )
}

export default StateFunctionalComponent