import { connect } from 'react-redux';
import { addMessage } from '../actions';
import AddMessage from '../components/AddMessage';

const mapDispatchToProps = dispatch => ({
  sendMessage: (message, author) => dispatch(addMessage(message, author)),
});

export default connect(null, mapDispatchToProps)(AddMessage);
