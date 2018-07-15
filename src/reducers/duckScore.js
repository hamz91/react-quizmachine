function duckScore(state = 0, action) {
  switch (action.type) {
    case "SET_DUCK_SCORE":
      const newScore = state + action.duckScore;
      return newScore;
    default:
      return state;
  }
}

export default duckScore;
