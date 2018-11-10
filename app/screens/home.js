import { Button } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import Counter from '../components/counter'
import CounterCommands from '../components/counterCommands'

const HomeContainer = styled.View`
  align-items: center;
  background-color: #baffc9;
  flex: 1;
  justify-content: center;
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
  handleOptionsButtonPress = () => {
    this.props.navigation.navigate('Options')
  }

  incrementCounter = () => {
    this.setState({ counterNb: this.state.counterNb + 1 })
  }

  render() {
    return (
      <HomeContainer>
        <Counter counterNb={this.state.counterNb} />
        <CounterCommands
          incrementCounter={this.incrementCounter}
          decrementCounter={this.decrementCounter}
        />
        <Button title="Options" onPress={this.handleOptionsButtonPress} />
      </HomeContainer>
    )
  }
}
