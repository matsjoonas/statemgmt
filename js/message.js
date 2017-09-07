(() => {
  const update = (newValue, prevValue) => {
    $('.js-message').text(newValue);
  };

  $('.js-message-input').on('keyup', function() {
    let message = $(this).val();
    STORE.dispatch({
      type: 'UPDATE_MESSAGE',
      message: message
    });
  });

  connectToState(state => state.message)(update);
})();