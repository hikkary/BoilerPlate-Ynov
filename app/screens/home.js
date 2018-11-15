import { connect } from 'react-redux'
import { bindActionsCreator } from 'redux'
import { Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import ParameterImage from '../static/images/parameter.png'

const BackgroundView = styled.View`
  flex: 1;
`
const ContentContainer = styled.View`
  background-color: ${props => props.theme.color.primary};
  flex: 5;
  justify-content: center;
  align-items: center;
`

const ParameterContainer = styled.View`
  background-color: ${props => props.theme.color.secondary};
  flex: 1;
  justify-content: center;
  align-items: center;
`

const ParameterTouchableOpacity = styled.TouchableOpacity``

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  // handle navigation
  handleCounterButtonPress = () => {
    this.props.navigation.navigate('Counter')
  }

  handleParameterButtonPress = () => {
    this.props.navigation.navigate('Options')
  }

  render() {
    return (
      <BackgroundView>
        <ContentContainer>
          <Text>{this.props.counter}</Text>
          <ParameterTouchableOpacity onPress={this.handleCounterButtonPress}>
            <Text>Counter</Text>
          </ParameterTouchableOpacity>
        </ContentContainer>
        <ParameterContainer>
          <ParameterTouchableOpacity onPress={this.handleParameterButtonPress}>
            <Image source={ParameterImage} />
          </ParameterTouchableOpacity>
        </ParameterContainer>
      </BackgroundView>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter
  }
}

export default connect(mapStateToProps)(Home)
