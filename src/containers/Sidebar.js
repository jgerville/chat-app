import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Sidebar);
