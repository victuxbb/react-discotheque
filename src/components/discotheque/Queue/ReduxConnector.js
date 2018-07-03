
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Queue from './Queue';
import * as QueueActions from './QueueActions';

function mapStateToProps(state) {
  return {
    peopleQueue: state.peopleQueue
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(QueueActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Queue);