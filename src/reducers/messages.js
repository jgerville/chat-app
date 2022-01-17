import { ADD_MESSAGE, MESSAGE_RECEIVED } from '../constants/actionTypes';

const messages = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id,
        },
      ]);
    default:
      return state;
  }
};

export default messages;