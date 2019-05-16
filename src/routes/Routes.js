import React, { Component } from 'react'

import navigation from '../services/navigation'
import ModalStack from '../stacks/ModelStack'

export default class Routes extends Component {
  setNavigatorRef = ref => navigation.setNavigator(ref)

  render() {
    return <ModalStack ref={this.setNavigatorRef} />
  }
}
