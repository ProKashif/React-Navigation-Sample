import React, { PureComponent } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './src/routes/Routes';
import { store } from './src/redux/store'


export default class App extends PureComponent {
 
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" backgroundColor="#ccc" />
          <Routes />
        </View>
      </Provider>
    )
  }
}