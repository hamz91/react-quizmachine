function wrongPotato(state = 3, action) {
  switch (action.type) {
    case "SET_WRONG_POTATO":
      if (state - action.wrongPotato < 0) {
        return state;
      } else {
        const newScore = state - action.wrongPotato;
        return newScore;
      }
    default:
      return state;
  }
}

export default wrongPotato;
