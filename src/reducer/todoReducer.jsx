const initialData = {
  list: []
}

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { id, data } = action.payload;
      return {
        ...state, list: [...state.list, {
          id: id,
          data: data
        }]
      };
    }
    case "REMOVE_TODO": {
      let newList = state.list.filter(item => item.id !== action.payload.id);
      return {
        ...state, list: newList
      };
    }


    default: return state;
  }



}
export default todoReducers;