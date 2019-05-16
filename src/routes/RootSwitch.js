/*
  Switcher between Main and Auth stacks
 */
import { createSwitchNavigator } from 'react-navigation'

import RootResolver from './RootResolver'
import AuthStack from '../stacks/AuthStack'
import HomeStack from '../stacks/HomeStack'

export default createSwitchNavigator({
  RootResolver,
  AuthStack, 
  HomeStack
})