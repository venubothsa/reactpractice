import React, { Component } from 'react'

 class FormComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
          username:'',
          comments:'',
          topic:'react'

         }
        // this.onChangeHandler=this.onChangeHandler.bind(this)
     }
     
     onChangeHandler=(event)=>{
         this.setState({
             username:event.target.value
         })
     }
     onCommentChangeHandler=(event)=>{
    this.setState({
    comments:event.target.value
     })
     }
     onTopicChangeHandler = event=>{
         this.setState({
             topic:event.target.value
         })
     }
     onSubmitHandler = event=> {
         alert(`${this.state.username} ${this.state.comments} ${this.state.topic}` )
         event.preventDefault()
     }
    render() {
        const {username,comments,topic}=this.state
        return (
            <form onSubmit={this.onSubmitHandler}>
            <div>
              <label>Username</label>  
              <input type='text' value={username} onChange={this.onChangeHandler}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.onCommentChangeHandler}/>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.onTopicChangeHandler}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
            </form>
            
        )
    }
}

export default FormComponent
