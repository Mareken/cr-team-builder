const TeamReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HERO':
      return {
        ...state,
        team: [ ...state.team, action.payload ]
      };
    case 'REMOVE_HERO': 
      return {
        ...state,
        team: state.team.filter(hero => hero.id !== action.id)
      };
    case 'CLEAR_TEAM':
      return {
        ...state,
        team: []
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default TeamReducer;