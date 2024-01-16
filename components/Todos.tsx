import { Heading, InfoOutlineIcon, VStack } from 'native-base'
import React from 'react'
import { useStore } from '../shared/useStore'
import { Todo } from './Todo'

export const Todos = () => {
  const { todos, removeTodo, setCompletedTodo } = useStore()

  return (
    <>
      {Boolean(todos.length) && <Heading size='lg' mt='12' mb='3'>Задачи</Heading>}
      <VStack space={2} width='100%'>
        {todos.map((todo) => (
          <Todo data={todo} onRemove={removeTodo} onCompleteChange={setCompletedTodo} key={todo.name} />
        ))}
      </VStack>
    </>
  )
}
