const HeroesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TRAIT':
      return {
        ...state,
        traits: state.traits.filter(el => el.id === action.payload)
      }
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

export default HeroesReducer;