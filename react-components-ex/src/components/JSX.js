import React from 'react'

function JSX() {
    // return (
    //     <div>
    //         <h1>Hello World</h1>
    //     </div>
    // )
    return React.createElement('div',null,React.createElement('h1',null,'Hello World'));
}

export default JSX;
