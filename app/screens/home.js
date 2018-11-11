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

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    counterNb: 0
  }

  decrementCounter = () => {
    this.setState({ counterNb: this.state.counterNb - 1 })
  }

  // handle navigation
  handleCharactersButtonPress = () => {
    this.props.navigation.navigate('Characters')
  }

  handleParameterButtonPress = () => {
    this.props.navigation.navigate('Options')
  }

  incrementCounter = () => {
    this.setState({ counterNb: this.state.counterNb + 1 })
  }

  render() {
    return (
      <BackgroundView>
        <Button title="Options" onPress={this.handleParameterButtonPress} />
      </BackgroundView>
    )
  }
}
