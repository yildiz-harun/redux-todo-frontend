import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, { content: action.payload.content, id: action.payload.id }]
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => { return todo.id !== action.payload.id })
            // [...state.todos, { content: action.payload.id, id: action.payload.id }]
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => { return todo.id === action.payload.id ? { content: action.payload.content, id: todo.id } : todo })
            //state.todos = state.todos.map((todo) => { ((todo.id === action.payload.id) ? return { todo.content : "111111111", todo.id: todo.id } : return todo))}
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoListSlice.actions

export default todoListSlice.reducer