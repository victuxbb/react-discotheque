import React, { Component } from 'react';

import { Wrapper, Title, PeopleQueue } from './Queue_styles';

import connect from '../../../connect'

class Queue extends Component {
  state = {     
    inputValue: ''
  }

  renderQueue() {
    const {queueModel, eventBus} = this.props
    eventBus.raiseEvent({event: {text: 'Se esta renderizando la cola de la discoteca'}})
    return queueModel.people.map((person, index) => {
      return (
        <li key={person.id} >
          <span>{person.name}</span>
          <button onClick={() => queueModel.deletePersonOnTheQueue(index + 1)} >Sacar de la cola</button>
          <button onClick={() => queueModel.transferToDisco(index + 1)} >Acceso</button>
          <button onClick={() => queueModel.checkDressCode(index + 1)} >Check dress code</button>
        </li>
      )
    })
  }

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }
  
  render() {
    const { queueModel } = this.props;

    return (
      <Wrapper>
        <Title>Cola</Title>
        <PeopleQueue>
          {this.renderQueue()}
        </PeopleQueue>
        <input 
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        <button onClick={(data) => queueModel.addPerson(data)} >Add to queue</button>
      </Wrapper>
    )
  }
}

export default Queue;