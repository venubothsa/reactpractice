import React, { Component } from 'react'

export class PropsClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hello i'm in {this.props.type} and I'm from {this.props.city}</h1>
            </div>
        )
    }
}

export default PropsClassComponent
