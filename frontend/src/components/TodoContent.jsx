function TodoContent({ todo }) {
  return (
    <div style={{ maxWidth: '150px' }}>
      {todo.content}
    </div>
  )
}

export default TodoContent
