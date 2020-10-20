import React from 'react'

function PropsFunctionalComponents(props) {
    return (
        <div>
              <h1>Hello i'm in {props.type} and I'm from {props.city}</h1>
        </div>
    )
}
export default PropsFunctionalComponents;