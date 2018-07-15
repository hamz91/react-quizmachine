function wrongDuck(state = 3, action) {
  switch (action.type) {
    case "SET_WRONG_DUCK":
      if (state - action.wrongDuck < 0) {
        return state;
      } else {
        const newScore = state - action.wrongDuck;
        return newScore;
      }
    default:
      return state;
  }
}

export default wrongDuck;
