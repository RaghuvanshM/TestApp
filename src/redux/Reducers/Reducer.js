const initialState = {
  employee: [],
};

const Reducer = (state = initialState, actions) => {
  alert('hello');
  switch (actions.type) {
    case 'AddEmplye':
      return {
        ...state,
        employee: actions.data,
      };

    default:
      return state;
  }
};

export default Reducer;
