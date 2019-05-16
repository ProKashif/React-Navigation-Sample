import { createStackNavigator } from 'react-navigation'
import { StackViewStyleInterpolator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import ActivityScreen from '../screens/ActivityScreen'

export default createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    ActivityScreen: { screen: ActivityScreen },
  },
  {
    // initialRouteName: 'AddressBookScreen',
    mode: 'modal',
    headerMode: true,
    // cardStyle: { backgroundColor: WHITE },
    navigationOptions: { gesturesEnabled: false },
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
  },
)