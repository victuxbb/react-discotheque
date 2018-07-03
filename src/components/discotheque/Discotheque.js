import React, { Component } from 'react';
import DiscothequeInfo from './DiscothequeInfo/DiscothequeInfo'
import Queue from './Queue/ReduxConnector'
import PeopleIn from './PeopleIn/ReduxConnector'
import { Wrapper } from './Discotheque_styles'

class Discotheque extends Component {
  state = {
		gauging: 100
  }
  
  render() {
    return (
      <Wrapper>
        <DiscothequeInfo gauging={this.state.gauging} />
        <Queue/>
        <PeopleIn/>
      </Wrapper>
    )
  }
}

export default Discotheque;