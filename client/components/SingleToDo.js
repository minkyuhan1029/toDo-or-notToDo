import React from 'react'

class SingleToDo extends React.Component {
  constructor(){
    super()
    this.state= {
      content: '',
      toggleEdit: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }
  handleChange(event){
    this.setState({
      content: event.target.value
    })
  }
  handleEnter(event){
    if(event.key === 'Enter'){
      this.props.updateErrand(this.props.err.id, {content:this.state.content})
      this.setState({
        toggleEdit: !this.state.toggleEdit
      })
    }
  }
  componentDidMount(){
    this.setState({
      content: this.props.err.content
    })
  }
  render(){
  return (
    <div className = 'todo-errand'>
      <input id = {this.props.err.id} type = 'checkbox' checked = {this.props.err.isDone || false} onChange={
       ()=> this.props.handleDone(this.props.err.id, { 'isDone':!this.props.err.isDone})}
        />
        <div onDoubleClick={()=> {
          this.setState({toggleEdit:!this.state.toggleEdit})
          }}>
      {this.state.toggleEdit? <input type="text" value={this.state.content} onChange={this.handleChange} onKeyDown={this.handleEnter}/> :<label htmlFor={this.props.err.id}>{this.props.err.content || ''}</label> }
        </div>
      <button onClick={()=>this.props.handleDelete(this.props.err.id)}> X </button>
    </div>
  )
  }
}

export default SingleToDo
