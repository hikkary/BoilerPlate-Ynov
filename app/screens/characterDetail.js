import { Text } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const BackgroundView = styled.View`
  background-color: #f5fcff;
  flex: 1;
  justify-content: center;
`

const Header = styled.View`
  background-color: #ff7b7b;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Content = styled.View`
  background-color: #ffbaba;
  flex: 3;
`
const Avatar = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  background-color: yellow;
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
    console.log(this.props)
    console.log(this.state)
    console.log(this.props.navigation.getParam('characterData'))
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
