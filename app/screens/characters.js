import { Text } from 'react-native'
import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import CharacterRow from '../components/characterRow'

const BackgroundView = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #f5fcff;
`

const StyledFlatList = styled.FlatList`
  margin-top: 20px;
`

export default class Options extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  state = {
    characters: null
  }

  componentDidMount() {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      .then(result => this.setState({ characters: result.data }))
  }

  _keyExtractor = item => item.name

  render() {
    const { characters } = this.state
    return (
      <BackgroundView>
        {characters ? (
          <StyledFlatList
            data={characters}
            renderItem={({ item }) => <CharacterRow character={item} />}
          />
        ) : (
          <Text>No data available</Text>
        )}
      </BackgroundView>
    )
  }
}
