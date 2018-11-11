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

const StyledFlatList = styled.FlatList``

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

  keyExtractor = item => item.name

  render() {
    const { navigation } = this.props
    const { characters } = this.state
    console.log(this.state.characters)
    return (
      <BackgroundView>
        {characters ? (
          <StyledFlatList
            data={characters}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => (
              <CharacterRow character={item} navigation={navigation} />
            )}
          />
        ) : (
          <Text>No data available</Text>
        )}
      </BackgroundView>
    )
  }
}
