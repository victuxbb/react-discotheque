import React, { Component } from 'react';

// Components
import DiscothequeInfo from './DiscothequeInfo/DiscothequeInfo'
import Queue from './Queue/Queue'
import PeopleIn from './PeopleIn/PeopleIn'

// Models
import QueueModel from './Queue/QueueModel'
import PeopleInModel from './PeopleIn/PeopleInModel'

// Event Driven Bus
import EventBus from '../../EventBus/EventBus'
import Logger from '../../EventBus/Observers/Logger'
import JarJarBinksBot from '../../EventBus/Observers/JarJarFuckingBot'

const eventBus = new EventBus
eventBus.addObserver({observer: new Logger})
eventBus.addObserver({observer: new JarJarBinksBot})

// Styles
import { Wrapper } from './Discotheque_styles'

const queueModel = new QueueModel({
  people: [
    { id: 1, name: "Oscar", dressStyle: "DRESSED_INFORMALLY" },
    { id: 2, name: "Victor", dressStyle: "DRESSED_FORMALLY" },
    { id: 3, name: "Rafa", dressStyle: "DRESSED_INFORMALLY" },
    { id: 4, name: "Alex", dressStyle: "DRESSED_FORMALLY"},
    { id: 5, name: "Pablo", dressStyle: "DRESSED_FORMALLY"}
  ],
  eventBus
})

const peopleInModel = new PeopleInModel({
  people: [
    { id: 1, name: "Manager", dressStyle: "DRESSED_INFORMALLY" },
    { id: 2, name: "BigBoss", dressStyle: "DRESSED_FORMALLY" },
    { id: 3, name: "SuperManager", dressStyle: "DRESSED_INFORMALLY" },
    { id: 4, name: "HyperManager", dressStyle: "DRESSED_FORMALLY"},
    { id: 5, name: "Lider de la liga Pokemon", dressStyle: "DRESSED_FORMALLY"}
  ], 
  eventBus
})

class Discotheque extends Component {
  state = {
		gauging: 100
  }
  
  render() {
    return (
      <Wrapper>
        <DiscothequeInfo gauging={this.state.gauging} />
        <Queue queueModel={queueModel} eventBus={eventBus} />
        <PeopleIn peopleInModel={peopleInModel} eventBus={eventBus} />
      </Wrapper>
    )
  }
}

export default Discotheque;