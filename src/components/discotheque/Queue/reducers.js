import {state, deletePersonOnTheQueue} from './QueueModel';
import {PERSON_ON_THE_QUEUE_DELETED, TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED} from './QueueActions'

const initialState = state()

export default function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    
    case PERSON_ON_THE_QUEUE_DELETED :
      const newState = deletePersonOnTheQueue(state, action.payload)
      console.log(newState)
      return newState

    case TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED:
      return deletePersonOnTheQueue(state, action.payload.id)
    
    default:
      return state;
  }

}