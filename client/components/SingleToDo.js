import React from 'react'

class SingleToDo extends React.Component {
  render(){
  return (
    <div className = 'todo-errand'>
      <input id = {this.props.err.id} type = 'checkbox' checked = {this.props.err.isDone || false} onChange={
       ()=> this.props.handleDone(this.props.err.id, { 'isDone':!this.props.err.isDone})}
        />
      <label htmlFor={this.props.err.id} >{this.props.err.content || ''}</label>
      <button onClick={()=>this.props.handleDelete(this.props.err.id)}> X </button>
    </div>
  )
  }
}

export default SingleToDo
