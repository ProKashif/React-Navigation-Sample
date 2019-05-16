import { createStackNavigator } from 'react-navigation'
import { StackViewStyleInterpolator } from 'react-navigation-stack'
import Login from '../screens/Login'
export default createStackNavigator(
  {
    Login: { screen: Login },
    
  },
  {
    // initialRouteName: 'AddressBookScreen',
    mode: 'modal',
    headerMode: 'none',
    // cardStyle: { backgroundColor: WHITE },
    navigationOptions: { gesturesEnabled: false },
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
  },
)