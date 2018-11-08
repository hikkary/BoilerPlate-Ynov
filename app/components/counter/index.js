import { Text } from 'react-native'
import React from 'react'
import Proptypes from 'prop-types'

export default class Counter extends React.Component {
  static propTypes = {
    counterNb: Proptypes.number
  }
  render() {
    const { counterNb } = this.props
    return (
      <React.Fragment>
        <Text>{counterNb ? counterNb : 0}</Text>
      </React.Fragment>
    )
  }
}
