import { Button, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import Counter from '../components/counter'
import CounterButton from '../components/counterButton'

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
        <Counter counterNb={this.state.counterNb} />
        <ButtonContainer>
          <CounterButton label="-" onPressFunction={this.decrementCounter} />
          <CounterButton label="+" onPressFunction={this.incrementCounter} />
        </ButtonContainer>
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
