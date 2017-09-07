

connectToState = dataSelector => {
  let prevState;

  if (!dataSelector) {
    dataSelector = state => state;
  }

  return callback => {
    // store initial state

    let initState = dataSelector(STORE.getState());

    // subscribe returns the unsubscribe function, so we have to store this
    var unsubscribe = STORE.subscribe(() => {

      // get slice of latest state using the provided `dataSelector` function
      let curState = dataSelector(STORE.getState()); // curstate = state.menu.isOpen

      // use lodash.isEqual or Immutable.is or some other form of object comparison
      // if (slice of) state has changed, call the `callback` function with new and old states
      if (!isEqual(curState, prevState)) {

        callback(curState, prevState);

        // store currentState
        prevState = curState;
      }
    });

    // initial call when binding subscriber, this is optional
    callback(initState, prevState);

    // store initial state
    prevState = initState;

    return unsubscribe;
  };
};


