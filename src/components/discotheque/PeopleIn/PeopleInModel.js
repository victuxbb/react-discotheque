export const state = () => ({
  people: [
    { id: 42, name: "Manager", dressStyle: "DRESSED_INFORMALLY" },
    { id: 43, name: "BigBoss", dressStyle: "DRESSED_FORMALLY" },
    { id: 44, name: "SuperManager", dressStyle: "DRESSED_INFORMALLY" },
    { id: 45, name: "HyperManager", dressStyle: "DRESSED_FORMALLY"},
    { id: 46, name: "Lider de la liga Pokemon", dressStyle: "DRESSED_FORMALLY"}
  ]
})

export const deletePersonInTheDiscotheque = (currentState, idPersonToDelete) =>
  ({...currentState, people: currentState.people.filter(person => person.id !== idPersonToDelete)})

export const addPersonInTheDiscotheque = (currentState, person) =>
  ({...currentState, people: currentState.people.concat([person])})
