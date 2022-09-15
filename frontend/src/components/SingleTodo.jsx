import { useState } from 'react'
import TodoContent from './TodoContent'
import TodoDeleteButton from './TodoDeleteButton'
import UpdateInput from './UpdateInput'
import UpdateTodoButton from './UpdateTodoButton'

function SingleTodo({ todo }) {
  const [value, setValue] = useState(todo.content)
  const [isUpdating, setIsUpdating] =
    useState(false)

  return (
    <div
      style={{
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid gray',
        margin: '5px 0px',
        padding: '5px 1px',
      }}
    >
      {isUpdating && (
        <UpdateInput
          todo={todo}
          setIsUpdating={setIsUpdating}
          value={value}
          setValue={setValue}
        />
      )}
      {!isUpdating && (
        <>
          <TodoContent todo={todo} />
          <div>
            <UpdateTodoButton
              todo={todo}
              isUpdating={isUpdating}
              setIsUpdating={setIsUpdating}
              value={value}
              setValue={setValue}
            />
            <TodoDeleteButton todo={todo} />
          </div>
        </>
      )}
    </div>
  )
}

export default SingleTodo
