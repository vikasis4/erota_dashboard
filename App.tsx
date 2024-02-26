import React from 'react'
import AppStackNavigation from './src/navigation/AppStackNavigator'
import TanStackProvider from './src/tanStack/Provider'

const App = () => {
  return (
    <TanStackProvider>
      <AppStackNavigation />
    </TanStackProvider>
  )
}

export default App
