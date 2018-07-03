import {addPersonInTheDiscotheque, deletePersonInTheDiscotheque, state} from './PeopleInModel'
import {PERSON_IN_THE_DISCOTHEQUE_DELETED} from './actions'
import {TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED} from '../Queue/QueueActions'

const initialState = state()

export default function reducer(state = initialState, action) {
  console.log(state, action)
  switch(action.type) {
    case PERSON_IN_THE_DISCOTHEQUE_DELETED:
      return deletePersonInTheDiscotheque(state, action.payload)

    case TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED:
      return addPersonInTheDiscotheque(state, action.payload)

    default:
      return state;
  }
}