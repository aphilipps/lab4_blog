import { ActionTypes } from '../actions';

const UsersReducer = (state = { all: [] }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS:
      return { all: action.payload };
    default:
      return state;
  }
};

export default UsersReducer;
