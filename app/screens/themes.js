import { Text } from 'react-native'
import React, { Component } from 'react'
import styled from 'styled-components'

const ThemesContainer = styled.View`
    align-Items: 'center',
    background-color: '#F5FCFF'
    flex: 1,
    justify-content: 'center',
`

export default class Themes extends Component {
  render() {
    return (
      <ThemesContainer>
        <Text>Couleur One</Text>
        <Text>Couleur Two</Text>
        <Text>Couleur Three</Text>
      </ThemesContainer>
    )
  }
}
