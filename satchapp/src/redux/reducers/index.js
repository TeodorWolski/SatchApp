const initialState = {
  saves: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, saves: [...state.saves, action.payload] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        saves: state.saves.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
