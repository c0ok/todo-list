import { atom, selector } from "recoil";
import type { Todo, Todos } from "./types";

export const todosAtom = atom<Todos>({
  key: 'todosAtom',
  default: {}
})

export const todosArraySelector = selector({
  key: 'todosArraySelector',
  get({ get }) {
    const todos = get(todosAtom)

    return Object.values(todos).filter(value => value !== null) as Todo[]
  }
})