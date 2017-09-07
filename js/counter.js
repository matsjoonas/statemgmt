
(() => {
  const update = (newValue, prevValue) => {
    $('.js-counter-display').text(newValue);
  };

  $('.js-counter-add').on('click', () => {
    STORE.dispatch({
      type: 'INCREMENT'
    });
  });

  connectToState(state => state.count)(update);
})();