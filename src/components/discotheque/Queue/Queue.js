import React, { Component } from 'react';

import { Wrapper, Title, PeopleQueue } from './Queue_styles';

class Queue extends Component {
  state = {     
    inputValue: ''
  }

  renderQueue() {
    const {peopleQueue, personOnTheQueueDeleted, tranferPersonToTheDiscothequeRequested} = this.props

    return peopleQueue.people.map(person => {
      return (
        <li key={person.id} >
          <span>{person.name}</span>
          <button onClick={() => personOnTheQueueDeleted(person.id)} >Sacar de la cola</button>
          <button onClick={() => tranferPersonToTheDiscothequeRequested(person)} >Enviar a la Discoteca</button>
        </li>
      )
    })
  }

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }
  
  render() {
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
        <button>Add to queue</button>
      </Wrapper>
    )
  }
}

export default Queue;