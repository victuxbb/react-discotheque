import React, { Component } from 'react';

import { Wrapper, Title, PeopleQueue } from './Queue_styles';

class Queue extends Component {
  state = {
    people: [
      { id: 1, name: "Oscar", dressStyle: "DRESSED_INFORMALLY" },
      { id: 2, name: "Victor", dressStyle: "DRESSED_FORMALLY" },
      { id: 3, name: "Rafa", dressStyle: "DRESSED_INFORMALLY" },
      { id: 4, name: "Alex", dressStyle: "DRESSED_FORMALLY"},
      { id: 5, name: "Pablo", dressStyle: "DRESSED_FORMALLY"}
    ], 
    inputValue: ''
  }

  renderQueue() {
    return this.state.people.map((person, index) => {
      return (
        <li key={person.id} >
          <span>{person.name}</span>
          <button onClick={() => this.deletePersonOnTheQueue(index + 1)} >X</button>
        </li>
      )
    })
  }

  deletePersonOnTheQueue = (indexPersonToDelete) => {
    const people = this.state.people
    people.splice(indexPersonToDelete - 1, 1)
    this.setState({people: people})
  }

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  onAdd = () => {
    const lastPersonIdOnTheQueue = this.state.people[this.state.people.length - 1].id;
    this.setState({
      people: [
        ...this.state.people,
        { id: lastPersonIdOnTheQueue + 1, name: this.state.inputValue, dressStyle: this.randomDressCode() }
      ]
    })
    this.setState({ inputValue: '' })
  }

  randomDressCode() {
    const dressCode = ["DRESSED_FORMALLY", "DRESSED_INFORMALLY"];
    const randomNumber = Math.floor(Math.random() * 2)
    return dressCode[randomNumber]
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
        <button onClick={this.onAdd} >Add to queue</button>
      </Wrapper>
    )
  }
}

export default Queue;