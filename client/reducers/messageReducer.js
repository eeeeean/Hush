import * as types from '../constants/actionTypes.js';

const initialState = {
  // define state
  username: 'matt',
  outgoing: '',
  outgoingTime: ''
};

const messageReducer = (state = initialState, action) => {

  switch (action.type) {
  case types.SEND_MESSAGE: {
    // add SEND_MESSAGE functionality

    return {
      ...state,
      outgoing: action.payload.message,
      outgoingTime: action.payload.timestamp
    };
  }
  case types.DELETE_MESSAGE: {
    // add DELETE_MESSAGE functionality

    return {
      ...state,
    };
  }
  case types.EDIT_MESSAGE: {
    // add EDIT_MESSAGE functionality

    return {
      ...state,
    };
  }
  case types.LIKE_MESSAGE: {
    // add LIKE_MESSAGE functionality

    return {
      ...state,
    };
  }

  default: {
    return state;
  }
  }
};

export default messageReducer;
