import { AsyncStorage, Button, Text } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

const BackgroundView = styled.View`
  flex: 1;
`
const ContentContainer = styled.View`
  align-items: center;
  background-color: ${props => props.theme.color.primary};
  flex: 5;
  flex-direction: row;
  justify-content: center;
`

const ParameterContainer = styled.View`
  background-color: ${props => props.theme.color.secondary};
  flex: 1;
  justify-content: center;
  align-items: center;
`
const EmailInput = styled.TextInput`
  height: 40px;
  background-color: ${props => props.theme.color.primary};
  border-color: ${props => props.theme.color.secondary};
  color: white;
  border-width: 1px;
  margin: 10px 20px;
`

const PasswordInput = styled.TextInput`
  height: 40px;
  background-color: ${props => props.theme.color.primary};
  border-color: ${props => props.theme.color.secondary};
  color: white;
  border-width: 1px;
  margin: 10px 20px;
`

const InputContainer = styled.View`
  flex-direction: column;
  flex: 1;
`

const ParameterTouchableOpacity = styled.TouchableOpacity``

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    emailValue: '',
    passwordValue: ''
  }

  fakeSubmit = () => {
    const { emailValue, passwordValue } = this.state
    if (emailValue === 'toto@gmail.com' && passwordValue === 'toto32') {
      AsyncStorage.setItem('userToken', 'cuicuilespetitsoiseau')
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    return (
      <BackgroundView>
        <ContentContainer>
          <InputContainer>
            <EmailInput
              autoCapitalize="none"
              onChangeText={emailValue => this.setState({ emailValue })}
              placeholder="Entrez votre email"
            />
            <PasswordInput
              autoCapitalize="none"
              onChangeText={passwordValue => this.setState({ passwordValue })}
              placeholder="Entrez votre mot de passe"
            />
            <Button onPress={this.fakeSubmit} title="submit" />
          </InputContainer>
        </ContentContainer>
        <ParameterContainer>
          <ParameterTouchableOpacity onPress={this.handleParameterButtonPress}>
            <Text>Connectez-vous</Text>
          </ParameterTouchableOpacity>
        </ParameterContainer>
      </BackgroundView>
    )
  }
}
