import { StackNavigator } from 'react-navigation'

import Characters from '../screens/characters'
import CharactersDetail from '../screens/characterDetail'
import Home from '../screens/home'
import Options from '../screens/options'
import Themes from '../screens/themes'

const optionsGeneral = {
  mode: 'modal',
  headerMode: 'none'
}

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  Characters: {
    screen: Characters,
    navigationOptions: {
      headerTitle: 'Characters'
    }
  },
  CharacterDetail: {
    screen: CharactersDetail,
    navigationOptions: {
      headerTitle: 'Character Card'
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

export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    }
  },
  optionsGeneral
)
