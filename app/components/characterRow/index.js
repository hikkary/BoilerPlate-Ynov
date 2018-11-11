import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Avatar from '../avatar'
import houseImagePicker from '../../utils/houseImagePicker'

const AvatarContainer = styled.View``

const CharacterRowContainer = styled.View`
  border-radius: 4px;
  box-shadow: 1px 1px 2px black;
  background-color: aliceblue;
  height: 50px;
  flex-direction: row;
  margin: 6px 12px;
  padding: 5px;
`

const HouseContainer = styled.View``

const HouseLogo = styled.Image`
  height: 40px;
  opacity: 0.5;
  width: 40px;
`

const InfoContainer = styled.View`
  margin-left: 12px;
  flex: 1;
`

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
    const { name, house, image } = this.props.character
    return (
      <TouchableOpacity
        onPress={() => this.handleCharacterNavigation(this.props.character)}
      >
        <CharacterRowContainer>
          <AvatarContainer>
            <Avatar size={40} source={{ uri: image }} />
          </AvatarContainer>
          <InfoContainer>
            <Text>{name}</Text>
          </InfoContainer>
          <HouseContainer>
            <HouseLogo source={houseImagePicker(house)} resizeMode="contain" />
          </HouseContainer>
        </CharacterRowContainer>
      </TouchableOpacity>
    )
  }
}
