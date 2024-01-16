import { AddIcon, FormControl, HStack, Heading, IconButton, Input } from 'native-base'
import React, { useState, type FC } from 'react'
import { useStore } from '../shared/useStore'

export const AddTodoForm: FC = () => {
  const [name, setName] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)

  const { addTodo } = useStore()

  const handleNameInputChange = (name: string) => {
    setName(name)

    if (isInvalid && Boolean(name.length)) {
      setIsInvalid(false)
    }
  }

  const handleAddButtonClick = () => {
    if (!name.length) {
      setIsInvalid(true)
      return
    }

    addTodo(name)
  }

  return (
    <>
      <Heading size='lg' mb='3'>Добавить задачу</Heading>
      <FormControl isInvalid={isInvalid}>
        <HStack space={2}>
          <Input flex={1} variant='underlined' colorScheme='indigo' placeholder="Введите имя или описание" size='lg' value={name} onChangeText={handleNameInputChange} />
          <IconButton colorScheme='indigo' px='3.5' borderRadius="sm" variant='outline' icon={<AddIcon name='pl' size="sm" />} onPress={handleAddButtonClick} />
        </HStack>
        <FormControl.ErrorMessage>Нужно дать задаче имя или описание</FormControl.ErrorMessage>
      </FormControl>
    </>
  )
}
