import React, { PureComponent } from 'react'
import { View,Text,TouchableOpacity ,Alert  } from 'react-native';
import navigation from '../services/navigation'
import { openHomeScreen } from '../screens/HomeScreen'
export default class Login extends PureComponent {


  getLoginPressed = () => {
    openHomeScreen()
    
  }

render() {

  const { navigation} = this.props;
    // A simple UI with a toolbar, and content below it.
    return (
      <View >
        <Text>Hello Kashif</Text>

        <View >
          <TouchableOpacity onPress={this.getLoginPressed} >
            <View
              style={[
                {
                  justifyContent: 'space-between',
                  marginBottom: 0,
                  alignItems: 'center',
                  flexDirection: 'row',
                },
              ]}
            >
              <Text >Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}



export const openLoginScreen = () => navigation.navigate('Login')