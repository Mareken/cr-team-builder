const TraitsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRAIT_ICON':
      return {
        ...state,
        traits: state.traits.map((el, index) => index === action.payload.index ? { ...el, icon: action.payload.icon } : el)
      };
    case 'TOGGLE_TRAIT_ACTIVE':
      return {
        ...state,
        traits: state.traits.map(el => el.id === action.payload ? { ...el, active: !el.active } : el)
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default TraitsReducer;