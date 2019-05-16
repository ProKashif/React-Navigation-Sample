import { NavigationActions, StackActions } from 'react-navigation'

let navigator;
const delayedActions = []; // List of delayed navigation actions

function setNavigator(navigatorRef) {
  navigator = navigatorRef

  if (delayedActions.length > 0) {
    // Execute all delayed navigation actions
    delayedActions.forEach(action => action.fn(...action.parameters))
    delayedActions.length = 0
  }
}

function getCurrentRoute(navigationState) {
  if (!navigationState) return

  const route = navigationState.routes[navigationState.index]

  if (route.routes) return getCurrentRoute(route)

  return route
}

const getCurrentScreen = () => getCurrentRoute(navigator.state.nav).routeName

const getCurrentScreenParams = () => getCurrentRoute(navigator.state.nav).params

function navigate(routeName, params) {
  if (!navigator) {
    delayedActions.push({ fn: navigate, parameters: [routeName, params] })
  } else {
    navigator.dispatch(NavigationActions.navigate({ routeName, params }))
  }
}

function replace(routeName, params) {
  const actionParams = { routeName, params }
  navigator.dispatch(StackActions.replace(actionParams))
}

const goBack = () => navigator.dispatch(NavigationActions.back())

const push = (routeName, params) =>
  navigator.dispatch(StackActions.push({ routeName, params }))

const pop = (screens, immediate) =>
  navigator.dispatch(StackActions.pop({ n: screens, immediate }))

function backButtonHandler() {
  const { routeName, params } = getCurrentRoute(navigator.state.nav)
  if (routeName === 'Login' || routeName === 'Login') return false

  // if (routeName === 'PinLockScreen' || routeName === 'PinLockMainScreen') {
  //   if (getPin(store.getState())) return false
  // }

  // if (routeName === 'FingerLockScreen' || routeName === 'FingerLockMainScreen') {
  //   if (!params.isSetup) return false
  // }

  goBack()
  return true
}

export default {
  navigate,
  replace,
  goBack,
  push,
  pop,
  getCurrentScreen,
  getCurrentScreenParams,
  setNavigator,
  backButtonHandler,
}