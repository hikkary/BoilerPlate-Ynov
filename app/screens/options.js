import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const OptionsContainer = styled.View`
  align-items: center;
  background-color: #f5fcff;
  flex: 1;
  justify-content: center;
`

export default class Options extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  handleParameterPress = parameterLocation => {
    this.props.navigation.navigate(parameterLocation)
  }
  render() {
    return (
      <OptionsContainer>
        <TouchableOpacity onPress={() => this.handleParameterPress('Themes')}>
          <Text>VERS LISTE DES COULEURS</Text>
        </TouchableOpacity>
      </OptionsContainer>
    )
  }
}
