import React from 'react';
import SingleToDo from './SingleToDo'
import {connect} from 'react-redux'
import {fetchErrands, addErrandDB, updateErrandDB, deleteErrandDB} from '../store/errand'

class ToDo extends React.Component{
  constructor(){
    super()
    this.state = {
      content: '',
      isDone: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount(){
    this.props.fetchErrands();
    this.props.fetchCount();
  }

  handleChange(event){
    this.setState({
      content: event.target.value
    })
  }
  handleEnter(event){
    if(event.key === 'Enter'){
      this.props.addErrand(this.state)
      this.setState({
        content: ''
      })
    }
  }
  handleDone(id, update){
    this.props.updateErrand(id,update)
  }
  handleDelete(id){
    this.props.deleteErrand(id)
  }
  numOfTasks(){
    return this.props.errand.all.filter((errand)=>!errand.isDone).length
  }

  render(){
    return(
      <div className='container'>
        <input type='text' value = {this.state.content} onChange = {this.handleChange} onKeyDown = {this.handleEnter}/>
        <div className='todo-list'>
          {this.props.errand.all.map((errand) => <SingleToDo key = {errand.id} err={errand} handleDone = {this.handleDone} handleDelete = {this.handleDelete}/> )}
        </div>
        <div>{this.numOfTasks()} {this.numOfTasks() > 1 ? 'errands' : 'errand'} left</div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    errand: state.errand,
    count: state.count
  }
}
const mapDispatch = dispatch => ({
  fetchErrands: () => dispatch(fetchErrands()),
  addErrand: (errand) => dispatch(addErrandDB(errand)),
  updateErrand: (id, update) => dispatch(updateErrandDB(id, update)),
  deleteErrand: (id) => dispatch(deleteErrandDB(id)),
  fetchCount: () => dispatch(fetchCount())
})
export default connect(mapState,mapDispatch)(ToDo)
