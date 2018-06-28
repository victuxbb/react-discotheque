import React, { Component } from 'react';

import DiscothequeInfo from './DiscothequeInfo/DiscothequeInfo'
import Queue from './Queue/Queue'

import { Wrapper } from './Discotheque_styles'

class Discotheque extends Component {
  state = {
		gauging: 100
  }
  
  render() {
    return (
      <Wrapper>
        <DiscothequeInfo gauging={this.state.gauging} />
        <Queue />
      </Wrapper>
    )
  }
}

export default Discotheque;