import { Component } from 'react'
import { AsyncStorage } from 'react-native';
import { openLoginScreen } from '../screens/Login'

class RootResolver extends Component {

  constructor() {
    super()

    openLoginScreen()
  }

  render() {
    return null
  }
}
export default RootResolver