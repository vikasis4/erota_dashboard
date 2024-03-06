import React from 'react'
import AppStackNavigation from './src/navigation/AppStackNavigator'
import ContextProvider from './src/context/ContextProvider'
import { SafeAreaView, StatusBar } from 'react-native';
import { colors } from './src//theme'

const App = () => {

  return (
    <SafeAreaView style={{ width: '100%', height: '100%' }}>
      <StatusBar backgroundColor={colors.primary} animated={true} />
      <ContextProvider>
        <AppStackNavigation />
      </ContextProvider>
    </SafeAreaView>
  )
}

export default App