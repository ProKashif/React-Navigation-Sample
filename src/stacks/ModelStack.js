import { createStackNavigator, createAppContainer  } from 'react-navigation'
import { StackViewStyleInterpolator } from 'react-navigation-stack'
import RootSwitch from '../routes/RootSwitch'

const AppNavigator = createStackNavigator(
  {
    RootSwitch,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: { duration: 0 },
      screenInterpolator: () => {}, // tslint:disable-line
    }),
    cardStyle: { backgroundColor: 'transparent' },
  },
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer