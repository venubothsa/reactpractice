import React, { Component } from 'react'

class BindThisComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         message:"Hello"
    }
  //  this.clickMe=this.clickMe.bind(this)
}

//     clickMe(){
//         this.setState({
// message:"Good Bye!"
//         })
//         console.log(this);
//     }
clickMe=()=>{
    this.setState({
        message:'Good Bye!'
    })
}
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickMe.bind(this)}> Click Class</button> */}
                {/* <button onClick={()=>this.clickMe()}> Click Class</button> */}
                <button onClick={this.clickMe}>Class Click</button>
            </div>
        )
    }
}
export default BindThisComponent