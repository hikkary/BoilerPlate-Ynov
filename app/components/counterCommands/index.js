import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import CounterButton from '../counterButton'

const ButtonContainer = styled.View`
  flex-direction: row;
`

export default class CounterCommands extends React.Component {
  static propTypes = {
    decrementCounter: PropTypes.func,
    incrementCounter: PropTypes.func
  }
  render() {
    const { decrementCounter, incrementCounter } = this.props
    return (
      <ButtonContainer>
        <CounterButton label="-" onPressFunction={decrementCounter} />
        <CounterButton label="+" onPressFunction={incrementCounter} />
      </ButtonContainer>
    )
  }
}
