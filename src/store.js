import create from "zustand"
import { persist } from "zustand/middleware"

const store = (set, get) => ({
  todos: [],

  addTodo: (text) => set({
    todos: [
      { id: Date.now(), text },
      ...get().todos
    ]
  }),

  deleteTodo: (id) => set({
    todos: get().todos.filter(todo => todo.id !== id)
  }),
})

const useStore = create(persist(
  store,
  { name: 'todos' },
))

export default useStore