import React, { PureComponent } from 'react'
import { View,Text, TouchableOpacity,SafeAreaView  } from 'react-native';
import navigation from '../services/navigation'
import { openActivityScreen } from '../screens/ActivityScreen'
export default class HomeScreen extends PureComponent {


  getActivityPressed = () => {

    openActivityScreen()
    
  }

render() {

  const { navigation} = this.props;
    // A simple UI with a toolbar, and content below it.
    return (
      <SafeAreaView>
      <View >
          <TouchableOpacity onPress={this.getActivityPressed} >
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
              <Text >Get gsdgsgsgdsdgsgsgsdgsdgsdgsdgsgsggStarted</Text>
            </View>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
  }
}



export const openHomeScreen = () => navigation.navigate('HomeScreen')