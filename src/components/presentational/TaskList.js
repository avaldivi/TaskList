import React from 'react';
import PropTypes from 'prop-types'
import { List, Segment } from 'semantic-ui-react';
import AddTaskForm from '../container/AddTaskForm'
import Task from './Task'


const TaskList = ({ tasks, onTaskClick }) => (
    <div>
      <AddTaskForm/>
      <Segment>
        <h2> Due Today </h2>
        <List>
          {
            tasks.map(task => (
              <Task key={task.id} {...task} onClick={() => onTaskClick(task.id)} />
            ))
          }
        </List>
      </Segment>
      <Segment>
        <h2> Due Soon </h2>
      </Segment>
      <Segment>
        <h2> Completed </h2>
      </Segment>
    </div>

);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired
};

export default TaskList;
