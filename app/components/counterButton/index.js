import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class CounterButton extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    onPressFunction: PropTypes.func
  }
  render() {
    const { label, onPressFunction } = this.props
    return (
      <TouchableOpacity onPress={onPressFunction}>
        <Text>{label}</Text>
      </TouchableOpacity>
    )
  }
}
