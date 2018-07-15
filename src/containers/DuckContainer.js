import { connect } from "react-redux";
import {
  increaseDuckScore,
  increaseWrongDuckScore,
  fetchDuckQuestion
} from "../actions";
import DuckQuiz from "../components/DuckQuiz";

export const mapStateToProps = reduxState => {
  return {
    duckScore: reduxState.duckScore,
    wrongDuck: reduxState.wrongDuck,

    question: reduxState.question
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    handleScore: score => {
      dispatch(increaseDuckScore(score)), dispatch(fetchDuckQuestion());
    },
    handleWrong: score => dispatch(increaseWrongDuckScore(score)),
    fetchQuestion: () => dispatch(fetchDuckQuestion())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckQuiz);
