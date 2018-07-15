function camelScore(state = 0, action) {
  switch (action.type) {
    case "SET_CAMEL_SCORE":
      const newScore = state + action.camelScore;
      return newScore;
    default:
      return state;
  }
}

export default camelScore;
