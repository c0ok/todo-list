import { NativeBaseProvider } from 'native-base'
import React, { type FC, type PropsWithChildren } from 'react'
import { RecoilRoot } from 'recoil'

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NativeBaseProvider>
      <RecoilRoot>
        {children}
      </RecoilRoot>
    </NativeBaseProvider>
  )
}
