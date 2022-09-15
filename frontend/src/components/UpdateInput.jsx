import { useDispatch } from 'react-redux'
import { updateTodo } from '../features/todoList/todoListSlice'

function UpdateInput({
  todo,
  value,
  setValue,
  setIsUpdating,
}) {
  const dispatch = useDispatch()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setIsUpdating(false)
        dispatch(
          updateTodo({
            content: value,
            id: todo.id,
          })
        )
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button>update</button>
    </form>
  )
}

export default UpdateInput
