import React, {
    Component
} from 'react'

class StateClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    increaseCounter() {
        this.setState({
            counter: this.state.counter + 1
        },
            () => {
                console.log('Call back value ',
                    this.state.counter
                )
            })
        console.log(this.state.counter)
    }
    increamentFive() {
        this.increaseCounter();
        this.increaseCounter();
        this.increaseCounter();
        this.increaseCounter();
        this.increaseCounter();
    }
    render() {
        return (
        <div>
            <h1> Counter Value {this.state.counter } </h1>
            <button onClick={() => this.increamentFive()} >Click Me</button>
       </div>)
    }
    }

export default StateClassComponent