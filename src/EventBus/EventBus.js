export default class EventBus {
  constructor() {
    this._observers = []
  }

  addObserver({observer}) {
    this._observers.push(observer)
  }

  removeObserver({observer}) {
    // TODO: Delete observer pasado por parametro
  }

  raiseEvent({event}) {
    if(this._observers.length === 0) {
      throw new Error('No hay observadores escuchando eventos')
    }

    for (let observer of this._observers) {
      observer.notify({event})
    }
  }

  get observers() {
    return this._observers.length
  }
}