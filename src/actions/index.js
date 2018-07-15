export function increasePotatoScore(potatoScore) {
  return {
    type: "SET_POTATO_SCORE",
    potatoScore: 1
  };
}

export function increaseDuckScore(duckScore) {
  return {
    type: "SET_DUCK_SCORE",
    duckScore: 1
  };
}

export function increaseCamelScore(camelScore) {
  return {
    type: "SET_CAMEL_SCORE",
    camelScore: 1
  };
}

export function increaseWrongPotatoScore(wrongPotato) {
  return {
    type: "SET_WRONG_POTATO",
    wrongPotato: 1
  };
}

export function increaseWrongDuckScore(wrongDuck) {
  return {
    type: "SET_WRONG_DUCK",
    wrongDuck: 1
  };
}

export function increaseWrongCamelScore(wrongCamel) {
  return {
    type: "SET_WRONG_CAMEL",
    wrongCamel: 1
  };
}

export function showNewQuestion(question) {
  return {
    type: "SET_QUESTION",
    question: question.results
  };
}

export function fetchDuckQuestion() {
  return function(dispatch, getState) {
    fetch(
      `https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple&encode=url3986`
    )
      .then(response => response.json())
      .then(question => {
        dispatch(showNewQuestion(question));
      });
  };
}

export function fetchPotatoQuestion() {
  return function(dispatch, getState) {
    fetch(
      `https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple&encode=url3986`
    )
      .then(response => response.json())
      .then(question => {
        dispatch(showNewQuestion(question));
      });
  };
}

export function fetchCamelQuestion() {
  return function(dispatch, getState) {
    fetch(
      `https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple&encode=url3986`
    )
      .then(response => response.json())
      .then(question => {
        dispatch(showNewQuestion(question));
      });
  };
}
