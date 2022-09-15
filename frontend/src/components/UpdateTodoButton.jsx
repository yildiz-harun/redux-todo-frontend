function UpdateTodoButton({
  todo,
  isUpdating,
  setIsUpdating,
  setValue,
}) {
  return (
    <button
      onClick={() => {
        setValue(todo.content)
        setIsUpdating(!isUpdating)
      }}
    >
      Update
    </button>
  )
}

export default UpdateTodoButton
