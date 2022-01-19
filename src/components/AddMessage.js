import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = ({ sendMessage }) => {
  let input;

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      sendMessage(input.value, 'Me')
      input.value = ''
    }
  }
  
  return (
    <section id='new-message'>
      <input
        autoFocus
        type='text' 
        onKeyPress={handleInput}
        ref={(node) => {input = node}}
      />
    </section>
  )
}

AddMessage.propTypes = {
  sendMessage: PropTypes.func.isRequired,
}

export default AddMessage;
