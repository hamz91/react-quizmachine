function potatoScore(state = 0, action) {
  switch (action.type) {
    case "SET_POTATO_SCORE":
      const newScore = state + action.potatoScore;
      return newScore;
    default:
      return state;
  }
}

export default potatoScore;
