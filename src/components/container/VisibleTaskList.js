import { connect } from 'react-redux'
import { toggleTask } from '../../actions'
import TaskList from '../presentational/TaskList'

const getVisibleTodos = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return tasks.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return tasks.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return tasks
  }
}

const mapStateToProps = state => {
  return {
    tasks: getVisibleTodos(state.tasks, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(toggleTask(id))
    }
  }
}

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default VisibleTaskList