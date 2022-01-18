import { connect } from 'react-redux';
import MessagesList from '../components/MessagesList';

const mapStateToProps = ({ messages }) => ({
  messages,
});

export default connect(mapStateToProps)(MessagesList);
