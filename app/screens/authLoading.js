import { ActivityIndicator, AsyncStorage, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const AuthLoadingContainer = styled.View`
  background-color: ${props => props.theme.color.secondary};
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default class AuthLoading extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  componentDidMount() {
    this.bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Home' : 'Auth')
  }

  // Render any loading content that you like here
  render() {
    return (
      <AuthLoadingContainer>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </AuthLoadingContainer>
    )
  }
}
