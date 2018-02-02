import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../actions'

let AddTaskForm = ({dispatch}) => {
  let input;
  return(
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if(!input.value.trim()) {
            return
          }
          dispatch(addTask(input.value));
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node
          }}
          placeholder='Finish TSR reports'
        />
        <button type='submit'> Add </button>
      </form>
    </div>
  )
}

AddTaskForm = connect()(AddTaskForm);

export default AddTaskForm