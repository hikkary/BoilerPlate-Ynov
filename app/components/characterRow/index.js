import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class CharacterRow extends React.Component {
  static propTypes = {
    character: PropTypes.object,
    navigation: PropTypes.object
  }

  handleCharacterNavigation = characterData => {
    this.props.navigation.navigate('CharacterDetail', {
      characterData: { ...characterData },
      itemId: characterData.name
    })
  }

  render() {
    const { name } = this.props.character

    return (
      <TouchableOpacity
        onPress={() => this.handleCharacterNavigation(this.props.character)}
      >
        <Text>{name}</Text>
      </TouchableOpacity>
    )
  }
}
