import {combineReducers} from 'redux'
import queueReducers from '../discotheque/Queue/reducers'
import peopleInReducers from '../discotheque/PeopleIn/reducers'

export default combineReducers({
  peopleQueue: queueReducers,
  peopleIn: peopleInReducers
});