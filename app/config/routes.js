import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import AuthLoading from '../screens/authLoading'
import Home from '../screens/home'
import Login from '../screens/login'
import Options from '../screens/options'
import Themes from '../screens/themes'

const optionsGeneral = {
  mode: 'modal',
  headerMode: 'none'
}

const LoggedUser = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options'
    }
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes'
    }
  }
})

const DisconnectedUser = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: () => null
    }
  }
})

export default createSwitchNavigator(
  {
    AuthLoading: { screen: AuthLoading },
    Auth: {
      screen: DisconnectedUser
    },
    Home: {
      screen: LoggedUser
    }
  },
  optionsGeneral
)
