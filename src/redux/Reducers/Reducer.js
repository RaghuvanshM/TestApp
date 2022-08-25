const initialState = {
  employee: [],
};

const Reducer = (state = initialState, actions) => {
 
  switch (actions.type) {
    case 'AddEmplyee':
      console.log( actions.payload)
      return {
        ...state,
        employee:[...state.employee,actions.payload],
      };

    default:
      return state;
  }
};

export default Reducer;
