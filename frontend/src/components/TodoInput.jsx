import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { useState } from 'react'

import { addTodo } from '../features/todoList/todoListSlice'

function TodoInput() {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        dispatch(
          addTodo({
            content: todo,
            id: Math.floor(
              Math.random() * 10000000
            ),
          })
        )
      }}
    >
      <input
        style={{
          width: '240px',
          padding: '4px 0px',
        }}
        type="text"
        placeholder="new todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      />
      <button
        style={{
          width: '60px',
          padding: '4px 0px',
        }}
        type="submit"
      >
        Add
      </button>
    </form>
  )
}

export default TodoInput
