export default class QueueModel {
  constructor ({people, eventBus}) {
    this.people = people
    this._addInputPerson = '',
    this._maxPeople = 300,
    this._eventBus = eventBus
  }

  deletePersonOnTheQueue(indexPersonToDelete) {
    this.people.splice(indexPersonToDelete - 1, 1)
    this._eventBus.raiseEvent({event: {text: 'Los seguratas no le dejan pasar, aunque no tienen motivos, simplemente no les ha caido bien...'}})
    // TODO: Eliminar persona de la cola
  }

  addPerson(name) {
    const lastPersonIdOnTheQueue = this.people[this.people.length - 1].id;
    this.people = [
      ...this.people,
      { id: lastPersonIdOnTheQueue + 1, name: name, dressStyle: this._randomDressCode() }
    ]
  }

  transferToDisco(index) {
    // TODO: Move Person from the Queue to the Discotheque
  }

  checkDressCode(index) {
    // TODO: if dressCode === 'DRESSED_FORMALLY' call transferToDisco, if dressCode === 'DRESSED_FORMALLY' call to deletePersonOnTheQueue
  }

  _randomDressCode() {
    const dressCode = ["DRESSED_FORMALLY", "DRESSED_INFORMALLY"];
    const randomNumber = Math.floor(Math.random() * 2)
    return dressCode[randomNumber]
  }
}