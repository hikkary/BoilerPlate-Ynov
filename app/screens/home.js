import { Button } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

const BackgroundView = styled.View`
  background-color: #baffc9;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.View`
  flex-direction: row;
`

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  // handle navigation
  handleCharactersButtonPress = () => {
    this.props.navigation.navigate('Characters')
  }

  handleParameterButtonPress = () => {
    this.props.navigation.navigate('Options')
  }

  render() {
    return (
      <BackgroundView>
        <ButtonContainer>
          <Button title="Options" onPress={this.handleParameterButtonPress} />
          <Button
            title="Characters"
            onPress={this.handleCharactersButtonPress}
          />
        </ButtonContainer>
      </BackgroundView>
    )
  }
}
