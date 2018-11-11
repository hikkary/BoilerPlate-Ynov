import React from 'react'
import { ThemeProvider } from 'styled-components'

import StackNavigator from './app/config/routes'
import { theme } from './app/config/themes'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StackNavigator />
      </ThemeProvider>
    )
  }
}
