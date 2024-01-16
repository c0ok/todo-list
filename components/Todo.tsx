import { Checkbox, DeleteIcon, HStack, IconButton, Text } from 'native-base'
import React, { type FC } from 'react'
import type { Action, Todo as TodoType } from '../shared/types'

type TodoProps = {
  data: TodoType
  onRemove: Action
  onCompleteChange: Action
}

export const Todo: FC<TodoProps> = ({ data, onRemove, onCompleteChange }) => {
  const handleTodoPress = () => {
    onCompleteChange(data)
  }

  const handleDeleteButtonPress = () => {
    onRemove(data)
  }

  return (
    <HStack w="100%" justifyContent="space-between" alignItems="center" bg='indigo.100' borderRadius='md' p='4' py='2.5'>
      <Checkbox colorScheme='indigo' value={data.name} isChecked={data.completed} onChange={handleTodoPress} />
      <Text width="100%" fontSize='md' flexShrink={1} textAlign="left" mx="2" strikeThrough={data.completed} onPress={handleTodoPress}>
        {data.name}
      </Text>
      <IconButton size="sm" colorScheme='indigo' icon={<DeleteIcon size='md' color="trueGray.400" />} onPress={handleDeleteButtonPress} />
    </HStack>
  )
}
