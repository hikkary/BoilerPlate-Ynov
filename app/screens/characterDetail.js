import { Text } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Avatar from '../components/avatar'

const BackgroundView = styled.View`
  background-color: #f5fcff;
  flex: 1;
  justify-content: center;
`
const Content = styled.View`
  background-color: #ffbaba;
  flex: 3;
`

const Header = styled.View`
  align-items: center;
  background-color: #ff7b7b;
  flex: 1;
  justify-content: center;
`

export default class Options extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    characterData: null
  }

  componentDidMount() {
    const { navigation } = this.props
    this.setState({
      characterData: navigation.getParam('characterData')
    })
  }

  render() {
    const { characterData } = this.state
    return (
      <BackgroundView>
        <Header>
          {this.state.characterData ? (
            <Avatar source={{ uri: characterData.image }} resizeMode="center" />
          ) : null}
        </Header>
        {this.state.characterData ? (
          <Content>
            <Text>{characterData.name}</Text>
            <Text>{characterData.dateOfBirth}</Text>
            <Text>{characterData.patronus}</Text>
            <Text>{characterData.species}</Text>
            <Text>{characterData.Gryffindor}</Text>
          </Content>
        ) : (
          <Content>
            <Text>Pas de donnée</Text>
          </Content>
        )}
      </BackgroundView>
    )
  }
}
