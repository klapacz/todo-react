import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const todosAtom = atomWithStorage('todos', [])

export function useAddTodo() {
  const [, setTodos] = useAtom(todosAtom)
  return (text) =>
    setTodos(todos => [
      ...todos,
      { id: Date.now(), text },
    ])
}

export function useDeleteTodo() {
  const [, setTodos] = useAtom(todosAtom)
  return (id) =>
    setTodos(todos => todos.filter(todo => todo.id !== id))
}
