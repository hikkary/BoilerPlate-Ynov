import { Button, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Counter from '../components/counter'
import CounterButton from '../components/counterButton'

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
  handleParameterButtonPress = () => {
    this.props.navigation.navigate('Options')
  }

  incrementCounter = () => {
    this.setState({ counterNb: this.state.counterNb + 1 })
  }

  render() {
    return (
      <View style={styles.container}>
        <Counter counterNb={this.state.counterNb} />
        <CounterButton label="-" onPressFunction={this.decrementCounter} />
        <CounterButton label="+" onPressFunction={this.incrementCounter} />
        <Button title="Options" onPress={this.handleParameterButtonPress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
