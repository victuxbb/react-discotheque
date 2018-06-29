export default class PeopleInModel {
  constructor ({ people, eventBus }) {
    this.people = people
    this._eventBus = eventBus
  }

  consumeDrink(indexPersonToDelete, price) {
    // TODO: Lanzar un evento que aumente el valor de las ganancias de la noche en el 'price'
    this._eventBus.raiseEvent({event: {text: 'Se ha comprado una bebida'}})
  }

  deletePersonInTheDiscotheque(indexPersonToDelete) {
    this.people.splice(indexPersonToDelete - 1, 1)
    this._eventBus.raiseEvent({event: {text: 'Se marcha de la discoteca'}})
    // TODO: Eliminar persona de la cola
    // TODO: Modificar el aforo
  }
}