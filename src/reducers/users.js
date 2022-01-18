import { ADD_USER, USERS_LIST } from '../constants/actionTypes';

const users = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_USER:
      return [...state,
        {
          name: action.name,
          id: action.id,
        },
      ];
    case USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;
