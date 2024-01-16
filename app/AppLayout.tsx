import { Center, Container, ScrollView } from 'native-base'
import React, { type FC, type PropsWithChildren } from 'react'

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ScrollView>
      <Center w='100%'>
        <Container w='100%' safeArea py='8'>
          {children}
        </Container>
      </Center>
    </ScrollView>
  )
}
