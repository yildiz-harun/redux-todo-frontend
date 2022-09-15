import {
  useDispatch,
  useSelector,
} from 'react-redux'
import SingleTodo from './SingleTodo'

function TodoList() {
  const todos = useSelector(
    (state) => state.todoList.todos
  )

  return (
    <div>
      <div>
        {todos.map((todo, index) => {
          return (
            <SingleTodo key={index} todo={todo} />
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
