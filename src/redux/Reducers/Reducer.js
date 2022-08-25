const initialState = {
  employee: [],
};

const Reducer = (state = initialState, actions) => {
 
  switch (actions.type) {
    case 'AddEmplyee':
      return {
        ...state,
        employee:[...state.employee,actions.payload],
      };
      case 'DeleteEmp':
        console.log( actions.payload)
        let filterData = state.employee.filter(item=>item.id !==actions.payload.id)
        console.log(filterData)
        return {
          ...state,
          employee:filterData
         
        };

    default:
      return state;
  }
};

export default Reducer;
