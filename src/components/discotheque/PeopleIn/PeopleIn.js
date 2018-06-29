import React, { Component } from 'react';

import { Wrapper, Title, PeopleInTheDiscotheque } from './PeopleIn_styles'

class PeopleIn extends Component {
  renderPeopleIn() {
    const {peopleInModel, eventBus} = this.props
    eventBus.raiseEvent({event: {text: 'Se esta renderizando la gente dentro de la discoteca'}})
    return peopleInModel.people.map((person, index) => {
      return (
        <li key={person.id} >
          <span>{person.name}</span>
          <button onClick={() => peopleInModel.consumeDrink(index + 1)} >Drink</button>
          <button onClick={() => peopleInModel.deletePersonInTheDiscotheque(index + 1)} >X</button>
        </li>
      )
    })
  }

  render() {
    return (
      <Wrapper>
        <Title>Gente dentro</Title>
        <PeopleInTheDiscotheque>
          {this.renderPeopleIn()}
        </PeopleInTheDiscotheque>
      </Wrapper>
    )
  }
}

export default PeopleIn