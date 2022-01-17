import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = ({ dispatch }) => {
  let input;

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      dispatch(input.value, 'Me')
      input.value = ''
    }
  }
  
  return (
    <section id='new-message'>
      <input 
        type='text' 
        onKeyPress={handleInput}
        ref={(node) => {input = node}}
      />
    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default AddMessage;
