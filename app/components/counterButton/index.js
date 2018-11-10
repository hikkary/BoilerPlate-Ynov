import { Text } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  background-color: #bae1ff;
  box-shadow: 1px 1px 10px #00000055;
  margin: 0px 5px;
  min-width: 50px;
  padding: 5px;
`

export default class CounterButton extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    onPressFunction: PropTypes.func
  }
  render() {
    const { label, onPressFunction } = this.props
    return (
      <StyledTouchableOpacity onPress={onPressFunction}>
        <Text>{label}</Text>
      </StyledTouchableOpacity>
    )
  }
}
