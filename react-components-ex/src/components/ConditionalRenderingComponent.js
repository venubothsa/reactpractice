import React, { useState } from 'react'

function ConditionalRenderingComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
   /* if (isLoggedIn) {
        return (
            <div>
                Welcome to Venu!
            </div>
        )
    } else {
        return (
            <div>
                Welcome to Guest!
              

            </div>
        )
    }*/
   // return isLoggedIn?(<div>  Welcome to Venu! </div>): (<div> Welcome to Guest!</div>);
        
    return isLoggedIn && <div>  Welcome to Venu! </div>;

}

export default ConditionalRenderingComponent
