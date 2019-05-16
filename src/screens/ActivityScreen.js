import React, { PureComponent } from 'react'
import { View,Text,SafeAreaView  } from 'react-native';
import navigation from '../services/navigation'

export default class ActivityScreen extends PureComponent {

render() {

  const { navigation} = this.props;
    // A simple UI with a toolbar, and content below it.
    return (
        <SafeAreaView>
      <View >
        <Text>Hello Kasqwr
            werwe
            rw
            er
            wesrwre
            werwew
            erwerwerwerwerwerwerwerwersdjfhsjdghsdjghjsdghjsdgdggjsgiksdgisdg
            rw
            er
            wrshif</Text>
      </View>
      </SafeAreaView>
    );
  }
}



export const openActivityScreen = () => navigation.navigate('ActivityScreen')