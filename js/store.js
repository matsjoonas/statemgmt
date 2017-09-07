
const count = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

const message = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return action.message;
    default:
      return state;
  }
};

const mainReducer = Redux.combineReducers({
  count,
  message
});

const STORE = Redux.createStore(mainReducer);


