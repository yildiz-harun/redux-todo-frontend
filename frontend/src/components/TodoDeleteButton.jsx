import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todoList/todoListSlice'

function TodoDeleteButton({ todo }) {
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => {
        dispatch(
          deleteTodo({
            content: todo.id,
            id: todo.id,
          })
        )
      }}
    >
      Delete
    </button>
  )
}

export default TodoDeleteButton
