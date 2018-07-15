function wrongCamel(state = 3, action) {
  switch (action.type) {
    case "SET_WRONG_CAMEL":
      if (state - action.wrongCamel < 0) {
        return state;
      } else {
        const newScore = state - action.wrongCamel;
        return newScore;
      }
    default:
      return state;
  }
}

export default wrongCamel;
