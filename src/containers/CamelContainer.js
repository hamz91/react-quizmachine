import { connect } from "react-redux";
import {
  increaseCamelScore,
  increaseWrongCamelScore,
  fetchCamelQuestion
} from "../actions";
import CamelQuiz from "../components/CamelQuiz";

export const mapStateToProps = reduxState => {
  return {
    camelScore: reduxState.camelScore,
    wrongCamel: reduxState.wrongCamel,

    question: reduxState.question
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    handleScore: score => {
      dispatch(increaseCamelScore(score)), dispatch(fetchCamelQuestion);
    },
    handleWrong: score => dispatch(increaseWrongCamelScore(score)),
    fetchQuestion: () => dispatch(fetchCamelQuestion())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CamelQuiz);
