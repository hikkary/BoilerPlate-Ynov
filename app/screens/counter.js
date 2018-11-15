import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import allTheActions from '../actions'

const CounterContainer = styled.View`
  align-items: center;
  background-color: #baffc9;
  flex: 1;
  justify-content: center;
`

class CounterScreen extends Component {
  render() {
    console.log(this.props)
    return (
      <CounterContainer>
        <Text>{this.props.counter}</Text>
        <TouchableOpacity onPress={this.props.actions.counter.increaseCounter}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.actions.counter.decreaseCounter}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.actions.counter.resetCounter}>
          <Text>reset</Text>
        </TouchableOpacity>
      </CounterContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    counter: bindActionCreators(allTheActions.counter, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterScreen)
