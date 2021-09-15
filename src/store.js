import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const todosAtom = atomWithStorage('todos', [])

export const addTodoAtom = atom(
  null,
  (get, set, text) =>
    set(todosAtom, [
      ...get(todosAtom),
      { id: Date.now(), text },
    ])
)

export const deleteTodoAtom = atom(
  null,
  (get, set, id) =>
    set(todosAtom, get(todosAtom).filter(todo => todo.id !== id))
)
