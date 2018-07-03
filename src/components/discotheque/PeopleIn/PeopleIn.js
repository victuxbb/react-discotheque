import React, { Component } from 'react';

import { Wrapper, Title, PeopleInTheDiscotheque } from './PeopleIn_styles'

class PeopleIn extends Component {
  renderPeopleIn() {
    const {peopleIn, personInTheDiscothequeDeleted} = this.props
    return peopleIn.people.map((person) => {
      return (
        <li key={person.id} >
          <span>{person.name}</span>
          <button onClick={() => personInTheDiscothequeDeleted(person.id)} >X</button>
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