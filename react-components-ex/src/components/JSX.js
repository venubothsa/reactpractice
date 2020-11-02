import React from 'react'

function JSX() {
    // return (
    //     <div>
    //         <h1>Hello World</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'test',className:'dummyClass'},React.createElement('h1',null,'Hello World'));
}

export default JSX;
