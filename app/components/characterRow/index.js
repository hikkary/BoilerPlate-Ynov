import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

export default class CharacterRow extends React.Component {
  static propTypes = {
    character: PropTypes.object
  }
  render() {
    const { name } = this.props.character
    return <Text>{name}</Text>
  }
}
