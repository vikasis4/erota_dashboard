import React from 'react'
import AppStackNavigation from './src/navigation/AppStackNavigator'
import ContextProvider from './src/context/ContextProvider'

const App = () => {
  return (
    <ContextProvider>
      <AppStackNavigation />
    </ContextProvider>
  )
}

export default App
