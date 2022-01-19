import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ users }) => {
  const mappedUsers = () => (
    users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))
  )
  
  return (
    <aside id='sidebar' className='sidebar'>
      <ul>
        { users ? mappedUsers() : null}
      </ul>
    </aside>
  )
}

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default Sidebar
