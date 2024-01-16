import 'react-native-get-random-values';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from 'uuid';
import { todosArraySelector, todosAtom } from "./store";
import type { Action, AddTodoAction } from "./types";

export const useStore = () => {
  const setTodos = useSetRecoilState(todosAtom)
  const todos = useRecoilValue(todosArraySelector)

  const addTodo: AddTodoAction = (name) => {
    const id = uuidv4()

    setTodos((prev) => ({ ...prev, [id]: { id, name, completed: false } }))
  }

  const removeTodo: Action = (todo) => {
    setTodos((prev) => ({ ...prev, [todo.id]: null }))
  }

  const setCompletedTodo: Action = (todo) => {
    setTodos((prev) => ({ ...prev, [todo.id]: { ...todo, completed: !todo.completed } }))
  }

  return { todos, addTodo, removeTodo, setCompletedTodo }
}